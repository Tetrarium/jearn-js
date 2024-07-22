// 1. Matrix Transpose
// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(matrix) {
  const result = matrix[0].map(_ => []);
  
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      result[j][i] = row[j];
    }
  }
  
  return result;
}


// 2. Quantum Bogosort
// https://www.codewars.com/kata/53165ceea8fbdb4e0c00015b/train/javascript

Array.prototype.qshuffle = function() {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [this[i], this[j]] = [this[j], this[i]];
  }
}

const QSC = {
  destroyed: false,
  destroyUniverse() {
    this.destroyed = true;
  }
}

function isSorted(arr) {
  return arr.every((v, i) => v >= (arr[i - 1] ?? -Infinity));
}

Array.prototype.qbsort = function() {
  this.qshuffle();
  return isSorted(this) ? this : QSC.destroyUniverse();
}


// 3. Texting with an old-school mobile phone
// https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript/669e390955f347233f1a1141
function isLowerCase(char) {
  return char === char.toLowerCase();
}

function getKeyPress(char, keyboard) {
  let keypress = '';
  let times = 0;
  char = char.toLowerCase();
  for (const [key, chars] of Object.entries(keyboard)) {
    if (chars.includes(char)) {
      keypress = key;
      times = chars.indexOf(char) + 1;
      break;
    }
  }
  
  return keypress.repeat(times);
}

const sendMessage = message => {
  // Start typing here
  let lastBtn = '';
  let isLastUpperCase = false; 
  
  const keyboard = {
    '1': '.,?!',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': ' ',
    '*': "'-+=",
    '#': '@',
  }
  
  let result = '';
  
  for (let i = 0; i < message.length; i++) {
    const char = message[i];

    if(char.match(/[a-zA-Z]/) && isLowerCase(char) && isLastUpperCase) {
      result += '#';
      isLastUpperCase = false;
    }
    
    if(char.match(/[a-zA-Z]/) && !isLowerCase(char) && !isLastUpperCase) {
      result += '#';
      isLastUpperCase = true;
    }
    
    lastBtn = result[result.length - 1];
    
    if(keyboard[char]) {
      if (char === lastBtn) {
        result += ' ';
      }
      result += char + '-';
    } else {   
      const key = getKeyPress(char, keyboard);
      result += key[0] === lastBtn ? ' ' + key : key;
    }
    
    
  }
  
  return result;
}

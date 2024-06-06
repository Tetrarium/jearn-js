// from codewars


// 7kui

// 1.
// Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.
function divCon(x) {
  return x.reduce((acc, elem) => {
    if (typeof elem === 'string') {
      return acc - elem;
    } else {
      return acc + elem;
    }
  }, 0);
}


// 2.
// Merge overlapping strings
// https://www.codewars.com/kata/61c78b57ee4be50035d28d42

function mergeStrings(first, second) {
  // Your solution

  let index = 0;
  console.log(first, second);

  while (index < first.length) {
    const remainder = first.slice(index);

    if (second.startsWith(remainder)) {
      return first + second.slice(remainder.length);
    }

    index++;
  }

  return first + second;
}


// 3
// Spot the Differences
// https://www.codewars.com/kata/5881460c780e0dd207000084
function spot(s1, s2) {
  // Code here
  const result = [];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      result.push(i);
    }
  }

  return result;
}

// 4
// Convert an array of strings to array of numbers
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23
function toNumberArray(stringarray) {
  return stringarray.map(str => +str);
}

// 5
// String Reordering
// https://www.codewars.com/kata/5b047875de4c7f9af800011b

// Example
// Input:
// List = [
//   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
//   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
// ];

// Output:
// 'Vatsan took his dog for a spin';
function sentence(arrayOfObjects) {
  return arrayOfObjects
    .sort((item1, item2) => {
      const [key1] = Object.keys(item1);
      const [key2] = Object.keys(item2);

      return key1 - key2;
    })
    .map(item => Object.values(item)[0])
    .join(' ');
}

// 6
// Anagram Detection
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
function toLowerAndSortChars(str) {
  return str.toLowerCase().split('').sort().join('');
}

function isAnagram(test, original) {
  if (test.length !== original.length) {
    return false;
  }

  return toLowerAndSortChars(test) === toLowerAndSortChars(original);
};

// 7 
// esreveR gnirtS
// https://www.codewars.com/kata/52b74e0936d582d9210005ff
String.prototype.reverse = function () {
  let result = '';

  for (let i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }

  return result;
};

// 8
// Sort the Gift Code
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3
function sortGiftCode(code) {
  return code.split('').sort().join``;
}

// 9
// String reverse slicing 101
// https://www.codewars.com/kata/586efc2dcf7be0f217000619
function reverseSlice(str) {
  const result = [];

  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  for (let i = 0; i < reversed.length; i++) {
    result.push(reversed.slice(i));
  }

  return result;
}

// 10
// Number encrypting: cypher
// https://www.codewars.com/kata/57aa3927e298a757820000a8
function cypher(string) {
  const map = {
    'I': 1,
    'R': 2,
    'E': 3,
    'A': 4,
    'S': 5,
    'G': 6,
    'T': 7,
    'B': 8,
    'O': 0,
    'l': 1,
    'z': 2,
    'e': 3,
    'a': 4,
    's': 5,
    'b': 6,
    't': 7,
    'g': 9,
    'o': 0,
  };

  let result = '';

  for (let i = 0; i < string.length; i++) {
    result += map[string[i]] ?? string[i];
  }

  return result;
}


/** 6 kui */
// 1
// Keyword Cipher Helper
// https://www.codewars.com/kata/535c1c80cdbf5011e600030f/train/javascript
function KeywordCipher(abc, keyword) {
  const key = Array.from(new Set([...keyword, ...abc]));

  function replace(str, from, to) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const index = from.indexOf(char);
      result += to[index] || char;
    }

    return result;
  }

  this.encode = function (str) {
    return replace(str, abc, key);
  };
  this.decode = function (str) {
    return replace(str, key, abc);
  };
}
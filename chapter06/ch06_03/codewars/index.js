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

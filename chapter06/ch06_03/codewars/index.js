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


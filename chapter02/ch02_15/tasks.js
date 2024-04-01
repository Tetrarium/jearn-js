// Здесь задачи без методов, которых нет в Node.js

/**
 * Задача 2
 * 
 * Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
 */

function min(a, b) {
  return a < b
    ? a
    : b;
}

exports.min = min;

// console.log('min(2, 5) =', min(2, 5));
// console.log('min(2, 5) =', min(2, 5));
// console.log('min(2, 5) =', min(2, 5));

/**
 * Задача 3
 * 
 * Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
 */

function pow(x, n) {
  if (n < 1 || n % 1 > 0) {
    return null;
  }

  let result = x;

  for (let i = 2; i <= n; i++) {
    result *= x;
  }

  return result;
}

exports.pow = pow;

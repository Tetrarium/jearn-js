// 1. Вычислить сумму чисел до данного
// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo
// Какой вариант решения самый быстрый? Самый медленный? Почему?
// Unit тесты: ./__tests__
// Тести на производительность ./performance/sumTo.js

// 1.1 С использованием цикла.
export function iterationSumTo(number) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    result += i;
  }

  return result;
}
// 40ms / 10_000 вызовов - средняя скорость


// 1.2 Через рекурсию
export function recursionSumTo(number) {
  return number < 1
    ? 0
    : number === 1
    ? 1
    : number + recursionSumTo(number - 1);
}
// 535ms / 10_000 вызовов - самый медленный вариант

// 1.3 С использованием формулы арифметической прогрессии.
export function progressionSumTo(number) {
  return number * (number + 1) / 2;
}
// 0.19ms / 10_000 вызовов - самый бастрый вариант


// 2. Вычислить факториал

export function factorial(n) {
  return n <= 2 ? n : n * factorial(n - 1);
}

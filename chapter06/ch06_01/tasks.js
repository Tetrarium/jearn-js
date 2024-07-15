// 1. Вычислить сумму чисел до данного
// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo

// 1.1 С использованием цикла.
export function iterationSumTo(number) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    result += i;
  }

  return result;
}
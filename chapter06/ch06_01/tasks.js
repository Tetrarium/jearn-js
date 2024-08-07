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
// https://learn.javascript.ru/recursion#vychislit-faktorial

export function factorial(n) {
  return n <= 2 ? n : n * factorial(n - 1);
}


// 3. Числа Фибоначчи
// https://learn.javascript.ru/recursion#chisla-fibonachchi

// вариант с рекурсией
export function fib(n) {
  if (!fib.cache) {
    fib.cache = [0, 1, 1];
    fib.MAX_CALL = 6000;
  }

  if (fib.cache[n]) {
    return fib.cache[n];
  }

  // Решение проблемы с переполнением стека
  // Без дополнительного кэширования происходит
  // Переполнение стека начиная с передачи функции числа 9042
  if (n > (fib.MAX_CALL + fib.cache.length)) {
    fib(fib.cache.length + fib.MAX_CALL);
  }

  const current = fib(n - 1) + fib(n - 2);
  fib.cache[n] = current;
  return current;
}

// вариант с итерацией
export function iterativeFib(n) {
  if (n <= 2) {
    return 1;
  }

  let [prev, current] = [1, 1];

  for (let i = 3; i <= n; i++) {
    const next = prev + current;
    [prev, current] = [current, next];
  }

  return current;
}
/**
 * По производительности
 * До 20_000 итератиыный и рекурсивный варианты работают одинаково
 * при передаче аргумента с большимзначением рекурсивный вариант
 * проигрывает итеративному
 */


// 3. Вывод односвязного списка
// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska

export function iterativePrintList(list) {
  let current = list;

  while (current) {
    alert(current.value);
    current = current.next;
  }
}

export function recursivePrintList(list) {
  alert(list.value);

  if (list.next) {
    recursivePrintList(list.next);
  }
}


// 4. Вывод односвязного списка в обратном порядке
// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska-v-obratnom-poryadke
export function iterativeReversePrintList(list) {
  const values = [];

  let current = list;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  for (let i = values.length - 1; i >= 0; i--) {
    alert(values[i]);
  }
}

export function recursiveReversePrintList(list) {
  if (list.next) {
    recursiveReversePrintList(list.next);
  }

  alert(list.value);
}

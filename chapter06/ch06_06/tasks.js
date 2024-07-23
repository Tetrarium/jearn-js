// 1. Установка и уменьшение значения счётчика
// https://learn.javascript.ru/function-object#ustanovka-i-umenshenie-znacheniya-schyotchika

export function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function(value) {
    return counter.count = value;
  }

  counter.decrease = function() {
    return counter.count--;
  }

  return counter;
}


// 2. Сумма с произвольным количеством скобок
// https://learn.javascript.ru/function-object#summa-s-proizvolnym-kolichestvom-skobok
// Не решил
export function sum(a) {
  let current = a;

  function f(b) {
    current += b;
    return f;
  }

  f.toString = function() {
    return current;
  };

  return f;
}
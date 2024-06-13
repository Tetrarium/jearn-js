'use strict';


// 1 Переведите текст вида border-left-width в borderLeftWidth
// https://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth
export function camelize(str) {
  return str
    .split('-')
    .reduce((result, substr) => result + substr[0].toUpperCase() + substr.slice(1));
}

// 2. Сортировать в порядке по убыванию
// https://learn.javascript.ru/array-methods#sortirovat-v-poryadke-po-ubyvaniyu
(() => {
  console.log('task 1');
  const arr = [5, 2, 1, -10, 8];

  arr.sort((el1, el2) => el2 - el1);

  console.log(arr);
})();


// 3. Скопировать и отсортировать массив
// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv
(() => {
  console.log('task2');
  const arr = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr) {
    const copy = arr.slice();
    return copy.sort();
  }

  const sorted = copySorted(arr);

  console.log(sorted);
  console.log(arr);
})();


// 4. Создать расширяемый калькулятор
// https://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
export function Calculator() {
  this.methods = {
    '+'(a, b) {
      return a + b;
    },

    '-'(a, b) {
      return a - b;
    }
  };
  this.calculate = function (expression) {
    const [a, operator, b] = expression.split(' ');

    return this.methods[operator](+a, +b);
  };

  this.addMethod = function (operator, fn) {
    this.methods[operator] = fn;
  };
}
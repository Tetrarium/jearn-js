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
function task05_05_02() {
  console.log('task 1');
  const arr = [5, 2, 1, -10, 8];

  arr.sort((el1, el2) => el2 - el1);

  console.log(arr);
}
// task05_05_02();


// 3. Скопировать и отсортировать массив
// https://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv
function task05_05_03() {
  console.log('task2');
  const arr = ["HTML", "JavaScript", "CSS"];

  function copySorted(arr) {
    const copy = arr.slice();
    return copy.sort();
  }

  const sorted = copySorted(arr);

  console.log(sorted);
  console.log(arr);
}
// task05_05_03();


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


// 5 Фильтрация по диапазону "на месте"
// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste
export function filterRangeInPlace(arr, a, b) {
  let index = 0;

  while (index < arr.length) {
    const item = arr[index];
    if (item >= a && item <= b) {
      index += 1;
    } else {
      arr.splice(index, 1);
    }
  }
}


// 6 Фильтрация по диапазону
// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu
export function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}


// 7 Трансформировать в массив имён
// https://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon
function task05_05_07() {
  console.log('task 7');
  const vasya = { name: "Вася", age: 25 };
  const petya = { name: "Петя", age: 30 };
  const masha = { name: "Маша", age: 28 };

  const users = [vasya, petya, masha];

  const names = users.map(user => user.name);

  console.log(names);
}
// task05_05_07();


// 8 Трансформировать в объекты
// https://learn.javascript.ru/array-methods#transformirovat-v-obekty
function task05_05_08() {
  console.log('task 8');
  const petya = { name: "Петя", surname: "Иванов", id: 2 };
  const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
  const masha = { name: "Маша", surname: "Петрова", id: 3 };

  const users = [vasya, petya, masha];

  const usersMapped = users.map(user => (
    {
      fullName: user.name + ' ' + user.surname,
      id: user.id,
    }
  ));

  console.log(usersMapped);
}
// task05_05_08();


// 9 Отсортировать пользователей по возрасту
// https://learn.javascript.ru/array-methods#otsortirovat-polzovateley-po-vozrastu
function task05_05_09() {
  console.log('task 9');
  const vasya = { name: "Вася", age: 25 };
  const petya = { name: "Петя", age: 30 };
  const masha = { name: "Маша", age: 28 };

  const users = [vasya, petya, masha];

  function sortByAge(users) {
    users.sort((user1, user2) => user1.age - user2.age);
  }

  console.log(users);
  sortByAge(users);
  console.log(users);
}
// task05_05_09();

// 10 Перемешайте массив
// https://learn.javascript.ru/array-methods#peremeshayte-massiv
// Сам не решил. Подсмотрел
function task05_05_10() {
  function testShiffle(fn) {
    const count = {};

    const timestamp = performance.now();
    for (let i = 0; i < 20_000_000; i++) {
      const arr = [1, 2, 3];
      fn(arr);

      const key = arr.join('');
      if (count[key]) {
        count[key]++;
      } else {
        count[key] = 1;
      }
    }
    console.log('Time: ', performance.now() - timestamp, 'ms');

    let result = '';
    for (let key in count) {
      result += `${key}: ${count[key]};\n`;
    }

    console.log(result);
  }

  function task10_1() {
    function shiffle(arr) {
      arr.sort(() => Math.random() - 0.5);
    }

    const arr = [1, 2, 3];
    // shiffle(arr);
    // console.log(arr);
    testShiffle(shiffle);
  }
  task10_1();

  function task10_2() {
    function shiffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

    }

    testShiffle(shiffle);
  }
  task10_2();
}
// task05_05_10();

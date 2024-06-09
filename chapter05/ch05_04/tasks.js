"use strict";

// (() => {
//   // Скопирован ли массив?
//   // https://learn.javascript.ru/array#skopirovan-li-massiv
//   const fruits = ['Apple', 'Pear', 'Orange'];

//   const shoppingCart = fruits;
//   shoppingCart.push('Banana');
//   console.log(fruits);
// })();


// (() => {
//   // Операции с массивами
//   // https://learn.javascript.ru/array#operatsii-s-massivami
//   // 1. Создайте массив styles с элементами «Джаз» и «Блюз».
//   console.log('Задача 1');
//   const styles = ['Джаз', 'Блюз'];
//   console.log(styles);

//   // 2. Добавьте «Рок-н-ролл» в конец.
//   styles.push('Рок-н-ролл');
//   console.log(styles);

//   // 3. Замените значение в середине на «Классика».
//   // Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//   styles[Math.floor(styles.length / 2)] = 'Классика';
//   console.log(styles);

//   // 4. Удалите первый элемент массива и покажите его.
//   console.log(styles.shift());
//   console.log(styles);

//   // 5. Вставьте Рэп и Регги в начало массива.
//   styles.unshift('Реп', 'Регги');
//   console.log(styles);

//   console.log('----\n');
// })();


// (() => {
//   // Вызов в контексте массива
//   // https://learn.javascript.ru/array#vyzov-v-kontekste-massiva
//   const arr = ['a', 'b'];

//   arr.push(function () {
//     console.log(this);
//   });

//   arr[2]();
// })();

// (() => {
//   // Сумма введённых чисел
//   // https://learn.javascript.ru/array#summa-vvedyonnyh-chisel

//   function sumInput() {
//     const arr = [];

//     while (true) {
//       const value = prompt('Введите число');

//       if (value === '' || !isFinite(value) || value === null) {
//         break;
//       }

//       arr.push(+value);
//     }

//     let sum = 0;
//     for (let num of arr) {
//       sum += num;
//     }
//     return(sum);
//   }

//   console.log(sumInput());
// })();


/** */
// Подмассив наибольшей суммы
// https://learn.javascript.ru/array#podmassiv-naibolshey-summy
export function getMaxSubSum() {
  return 0;
}

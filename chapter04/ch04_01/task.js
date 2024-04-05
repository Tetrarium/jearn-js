"use strict";

// const user = {
//   '5': 'five',
//   '3': 'three',
//   name: 'Alex',
//   age: 30,
//   isAdmin: true,
//   '+4': 'four',
//   '2': 'two',
//   '1': () => { console.log('f1'); },
// };

// user[6] = function () { console.log(this); };
// user[7] = () => { console.log(this); };

// console.log(JSON.stringify(user));
// console.log('name' in user);

// /** for-in */
// console.log('for .. in');
// for (let key in user) {
//   console.log(key, user[key]);
// }
// console.log('end for .. in');

// console.log('call user[1]');
// user[1]();

// console.log('call user[6]');
// user[6]();

// console.log('call user[7]');
// user[7]();

// console.log('this');
// console.log(this);

// const fn7 = user[7];
// fn7();

// const fn7b = fn7.bind(user);
// console.log(fn7b);
// console.log('call fn7b');
// fn7b();

// const fn6 = user[6];
// fn6();

// const fn6b = fn6.bind(user);
// console.log('call fn6b');
// fn6b();

// console.log('next code');

/**
 * Задачи
 */

/**
*  Задача 1.
*  Напишите код, выполнив задание из каждого пункта отдельной строкой:

*   1. Создайте пустой объект user.
*   2. Добавьте свойство name со значением John.
*   3. Добавьте свойство surname со значением Smith.
*   4. Измените значение свойства name на Pete.
*   5. Удалите свойство name из объекта.
*/

// const user = {};
// logUser('1. Создайте пустой объект user.');

// user.name = 'John';
// logUser('2. Добавьте свойство name со значением John.');

// user.surname = 'Smith';
// logUser('3. Добавьте свойство surname со значением Smith.');

// user.name = 'Pete';
// logUser('4. Измените значение свойства name на Pete.');

// delete user.name;
// logUser('5. Удалите свойство name из объекта.');

// function logUser(header) {
//   console.log(header);
//   console.log('user:');
//   console.log(user);
//   console.log('=====');
// }



/** 
 * Задача 2. Проверка на пустоту
 * 
 * Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

exports.isEmpty = isEmpty;

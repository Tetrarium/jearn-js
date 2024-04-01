'use strict';

// Функции https://learn.javascript.ru/function-basics

// Проверка обращения к переменным

// const outerMsg = 'World';

// function showMsg(msg) {
//   // const msg = 'www'; //Ошибка SyntaxError: Identifier 'msg' has already been declared
//   console.log(msg + outerMsg);
// }

// showMsg();
// showMsg('Hello!');


/**
 * Значения по умолчанию
 */

// function showMessage(from, text = 'no message') {
//   console.log(from + ': ' + text);
// }

// showMessage('Ann');
// showMessage('Ann', 'Hello!');


/**
 * Возвращаемые значения
 */

// // без return

// function withoutReturn() { }
// console.log('without return:', withoutReturn());

// // с пустым return
// function withEmptyReturn() { return; }
// console.log('with empty return', withEmptyReturn());

// // с непустым return
// function withReturn() {
//   const num = 1 + 2;
//   return num;
// }
// console.log('with no empty return:', withReturn());


/* Задачи */

/**
 * Задача 1
 *
 * Следующая функция возвращает true, если параметр age больше 18.
 *
 * В ином случае она задаёт вопрос confirm и возвращает его результат.
 *
 *  function checkAge(age) {
 *    if (age > 18) {
 *      return true;
 *    } else {
 *      return confirm('Родители разрешили?');
 *    }
 *  }
 * Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
 *
 * Сделайте два варианта функции checkAge:
 *
 * Используя оператор ?
 * Используя оператор ||
 */

// Решение с ?

// function checkAge(age) {
//   return age > 18
//     ? true
//     : confirm('Родители разрешили?');
// }

// Решение с ||

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

console.log('checkAge(17)', checkAge(17));
console.log('checkAge(18)', checkAge(18));
console.log('checkAge(19)', checkAge(19));


/** ----- */


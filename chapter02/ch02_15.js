'use strict';

// Функции https://learn.javascript.ru/function-basics

// Проверка обращения к переменным

const outerMsg = 'World';

function showMsg(msg) {
  // const msg = 'www'; //Ошибка SyntaxError: Identifier 'msg' has already been declared
  console.log(msg + outerMsg);
}

showMsg();
showMsg('Hello!');

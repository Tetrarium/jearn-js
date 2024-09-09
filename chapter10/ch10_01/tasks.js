"use strict";
console.log("tasks from roadmap");

const task10_1_1 = () => {
  // Что будет с кодом ниже после throw?
  throw new Error('error');
  console.log('after error'); // не выполняется
}
// task10_1_1();

const task10_1_2 = () => {
  // Что будет с кодом второго setTimeout после throw в первом?
  setTimeout(() => {
    console.log('first setTimeout');
    throw new Error('error in first setTimeout');
  }, 0);

  setTimeout(() => {
    console.log('second setTimeout');
    throw new Error('error in second setTimeout');
  }, 0);

  setTimeout(() => {
    console.log('third setTimeout');
    asdf;
  }, 0);

  setTimeout(() => {
    console.log('fourth setTimeout');
    zxcv;
  }, 0);
  // все таймауты выполняются

  setInterval(() => {
    console.log('setInterval');
    error;
  }, 1000);
  // интервал тоже работает, каждый раз выводя ошибку в консоль
}
// task10_1_2();


const task10_1_3 = () => {
  // Что будет с кодом ниже, если код выше обернут в try..catch и делает throw?
  try {
    throw new Error('error in try');
  } catch {

  } finally {
    console.log("finally выполняется всегда");
  }

  console.log('выполняется');

  try {
    throw new Error('error in try');
  } catch {
    throw new Error('error in catch');
  } finally {
    console.log('finally также выполняется')
  }

  console.log('не выполняется');
}
// task10_1_3();

const task10_1_4 = () => {
  try {

  } catch {

  } finally {
    asdf
  }

  console.log('не выполнится');
}
// task10_1_4();

const task10_1_5 = () => {
  // Что технически возможно throw'ить?

  // throw '1';
  // throw 1
  // throw { err: 123 }
  // throw new Date();
  // throw null;
  // throw undefined;
  // throw true;
  // throw Symbol('test');
  // throw () => {}
  function foo(a, b) { return a + b };
  // throw foo;
  // throw [1, 2, 3];
  // Все что угодно
}
// task10_1_5();

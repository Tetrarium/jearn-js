"use strict"
console.log("Chapter 10.2");

const example10_2_1 = () => {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }


  function test() {
    throw new ValidationError("Oops!");
  }

  try {
    test();
  } catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
  }
};
// example10_2_1();


const example10_2_2 = () => {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new ValidationError("Нет поля: age");
    }

    if (!user.name) {
      throw new ValidationError("Нет поля: name");
    }

    return user;
  }

  function tryReadUser(json) {
    try {
      return readUser(json);
    } catch (err) {
      if (err instanceof ValidationError) {
        console.log("Некорректные Данные: " + err.message);
      } else if (err instanceof SyntaxError) {
        console.log("JSON Ошибка Синтаксиса: " + err.message);
      } else {
        throw err;
      }
    }
  }

  const correctJson = '{ "name": "Uasya", "age": 25 }';
  const withoutNameJSON = '{ "age": 25 }';
  const withoutAgeJSON = '{ "name": "Uasya" }';
  const uncorrectJSON = '{ "name": "Uasya", "age": 25, }';

  console.log(tryReadUser(correctJson));
  console.log(tryReadUser(withoutNameJSON));
  console.log(tryReadUser(withoutAgeJSON));
  console.log(tryReadUser(uncorrectJSON));
}
example10_2_2();

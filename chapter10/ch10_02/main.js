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

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("Нет свойства: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }

  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new PropertyRequiredError("age");
    }

    if (!user.name) {
      throw new PropertyRequiredError("name");
    }

    return user;
  }

  function tryReadUser(json) {
    try {
      return readUser(json);
    } catch (err) {
      if (err instanceof ValidationError) {
        console.log("Некорректные Данные: " + err.message);
        console.log(err.name);
        console.log(err.property);
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
// example10_2_2();


const example10_2_3 = () => {
  class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }

  class ValidationError extends MyError {}

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("Нет свойства: " + property);
      this.property = property;
    }
  }

  console.log(new PropertyRequiredError('field'));
  console.log(new ValidationError('prop'));
};
// example10_2_3();


const example10_2_4 = () => {
  class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }

  class ValidationError extends Error {}

  class PropertyRequiredError extends ValidationError {}

  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError('age');
    }

    if (!user.name) {
      throw new PropertyRequiredError('name');
    }
  }

  function readUser(json) {
    let user;

    try {
      user = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Синтаксическая ошибка", err);
      } else {
        throw err;
      }
    }

    try {
      validateUser(user);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Ошибка валидации", err);
      } else {
        throw err;
      }
    }
  }

  try {
    readUser('{"age": 50}');
  } catch (e) {
    if (e instanceof ReadError) {
      console.log(e);
      console.log(e.cause);
    }
  }
}
// example10_2_4();

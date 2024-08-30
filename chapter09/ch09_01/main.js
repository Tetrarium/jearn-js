"use strict";
console.log('Chapter 9.1');

function example9_1_1() {
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }

    prop = 123
  }

  const user = new User('Vasya');

  user.sayHi();
  console.log(user);
  console.log(user.__proto__);
  console.dir(User.prototype);

  User.prototype.sayHi();
  user.__proto__.sayHi();

  console.log(typeof User);
}
// example9_1_1();

function example9_1_2() {
  function User(name) {
    this.prop = 123;
    this.name = name;

    User.prototype = this.__proto__ = {
      sayHi() {
        console.log(this.name);
      }
    }
  }

  const user = new User('Petya');

  console.log(user);
  console.log(user.__proto__);
  console.log(User.prototype);

  User.prototype.sayHi();
  user.__proto__.sayHi();

  user.sayHi();

  console.log(typeof User);
}
// example9_1_2();


function example9_1_3() {
  class User {
    constructor(name) { this.name = name; }
    sayHi() {console.log(this.name)}
  }

  console.log(typeof User);
  console.log(User === User.prototype.constructor);

  console.log(User.prototype);
  console.log(Object.getOwnPropertyNames(User.prototype));
  console.log(User);

  console.log(Object.getOwnPropertyDescriptor(User.prototype, "sayHi"));
}
// example9_1_3();

function example9_1_4() {
  const User = class {
    sayHi() {
      console.log('Hello');
    }
  };

  const user = new User();
  user.sayHi();
}
// example9_1_4();


function example9_1_5() {
  const User = class MyClass {
    sayHi() {
      console.dir(MyClass);
      return MyClass;
    }
  };

  const test = new User().sayHi();
  console.log(test);
  console.log( new test());
  new (new test().sayHi())().sayHi();
}
// example9_1_5();


function example9_1_6() {
  function makeClass(phrase) {
    return class {
      sayHi() {
        console.log(phrase);
      }
    }
  }

  const User = makeClass('Hello');

  new User().sayHi();

  const Animal = makeClass('Beee');

  // new Animal().sayHi();
}
// example9_1_6();


function example9_1_7() {
  class User {
    constructor(name) {
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('The name is to small!!!');
        return;
      }

      this._name = value;
    }
  }

  const user = new User("Vasya");
  console.log(user);
  console.log(user.name);
  user.name = 'Av';

  const user2 = new User('');
  console.log(user2);
  user2.name = 'Petya';
  console.log(user2);
}
// example9_1_7();

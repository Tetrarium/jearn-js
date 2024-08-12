"use strict";
console.log('Chapter 7.1');

// data properties
// accessor properties

function example7_2_1() {
  const user = {
    name: 'John',
    surname: 'Doe',

    get fullName() {
      return `${this.name} ${this.surname}`
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    }
  }

  console.log(user);
  console.log(Object.getOwnPropertyDescriptors(user));
  for (const key in user) {
    console.log(key, user[key]);
  }

  console.log(Object.entries(user));

  user.fullName = 'Alice Cooper';

  console.log(user);
}
// example7_2_1();


function example7_2_2() {
  const user = {
    name: 'John',
    surname: 'Doe',
  }

  Object.defineProperty(user, 'fullName', {
    // value: 'any', // TypeError
    get() {
      return `${this.name} ${this.surname}`
    },

    set(value) {
      [this.name, this.surname] = value.split(' ');
    },

    enumerable: true,
  });

  console.log(user.fullName);
  // console.log(Object.entries(user));

  console.log(Object.isFrozen(user));
  Object.freeze(user);
  console.log(Object.isFrozen(user));
  console.log(user.fullName);
  // user.fullName = 'Alice Cooper';
  console.log(Object.getOwnPropertyDescriptors(user));
}
example7_2_2();


function example7_2_3() {
  const user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        console.log('Name is too small. Must be greater then 4 symbols');
        return;
      }
      this._name = value;
    }
  }

  user.name = 'Pete';
  console.log(user.name);

  user.name = 'Ya',
  console.log(user.name);
  console.log(user);
}
// example7_2_3();

function example7_2_4() {
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
      get() {
        const todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });

  }

  const john = new User('John', new Date(1992, 6, 1));
  console.log(john.age);
}
// example7_2_4();

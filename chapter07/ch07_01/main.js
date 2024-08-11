"use strict";
console.log('Chapter 7.1');

// Flags
// writable
// enumerable
// configurable
function example7_1_1() {
  const symId = Symbol('id')
  const user = {
    name: 'Vasya',
    [symId]: 123,
  }

  const nameDescriptor = Object.getOwnPropertyDescriptor(user, 'name');

  console.log(nameDescriptor);

  console.log(Object.getOwnPropertyDescriptor(user, symId));
  console.log(user);
  console.log(Object.entries(user));

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  console.log(user);
  // user.name = 'Petya'; // не работает, посколку сделали неизменяемым
  console.log(Object.getOwnPropertyDescriptor(user, 'name'));

  console.log(Object.defineProperty(user, 'name', { writable: true }));
  console.log(Object.getOwnPropertyDescriptor(user, 'name'));
  user.name = 'Petya';
  console.log(Object.getOwnPropertyDescriptor(user, 'name'));

  console.log(Object.defineProperty(user, 'name', {enumerable: false}));
  console.log(Object.getOwnPropertyDescriptor(user, 'name'));

  console.log(Object.entries(user));

  const user2 = {
    ...user,
  }

  console.log(user);
  console.log(user2);

  const user3 = Object.assign({}, user);
  console.log(user3);

  Object.defineProperty(user, 'name', {configurable: false});
  console.log(user);
  user.name = 'John';
  console.log(user);
  Object.defineProperty(user, 'name', {writable: false});
  console.log(Object.getOwnPropertyDescriptor(user, 'name'));
  // Object.defineProperty(user, 'name', {writable: true}); // TypeError при порытке false -> true, true -> false можно

  // Object.defineProperty(user, 'name', {configurable: true}); // configurable true уже не сделать


  Object.defineProperty(user, 'lastName', {
    value: 'Doe',
  })
  console.log(user);
  console.log(Object.entries(user));
  for (const key in user) {
    console.log(key, ':', user[key]);
  }
  console.log(Object.getOwnPropertyDescriptor(user, 'lastName'));
}
// example7_1_1();


// Неперечислимое свойство
function example7_1_2() {
  const user = {
    name: 'John',

    toString() {
      return this.name;
    }
  }

  console.log(Object.getOwnPropertyDescriptor(user, 'toString'));
  console.log(user);
  console.log(Object.keys(user));
  Object.defineProperty(user, 'toString', {
    enumerable: false,
  })
  console.log(user);
  console.log(Object.keys(user));
}
// example7_1_2();


// Неконфигурироемое свойство
function example7_1_3() {
  console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
  console.log(Object.getOwnPropertyDescriptor(Math, 'random'));
  Math.random = 10;
  console.log(Object.getOwnPropertyDescriptor(Math, 'random'));
  console.log(Math.random);
}
// example7_1_3();


// Метод Object.defineProperties
function example7_1_4() {
  const user = {};

  Object.defineProperties(user, {
    name: { value: 'John', writable: false },
    surname: { value: 'Doe', writable: false },
  })

  console.log(Object.getOwnPropertyDescriptors(user));

  const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
  console.log(clone);
  // clone.name = 'Vasya';
}
// example7_1_4();


function example7_1_5() {
  const obj = {
    prop1: 'val1',
    prop2: 'val2',
  }
  obj.prop3 = 'val3';

  Object.preventExtensions(obj); // Запрещает добавлять новые свойства в объект
  console.log(Object.getOwnPropertyDescriptors(obj));
  // obj.prop4 = 'val4'; // низзя
  obj.prop1 = 'val4'; // можно
  console.log(obj);
}
// example7_1_5();

function example7_1_6() {
  const obj = {
    prop1: 'val1',
    prop2: 'val2',
  }

  obj.prop3 = 'val3',

  Object.seal(obj);
  // obj.prop4 = 'val4'; // нельзя
  obj.prop1 = 'val5';
  console.log(obj);
  console.log(Object.getOwnPropertyDescriptors(obj));
  // Object.defineProperty(obj, 'val2', {writable: false}); // нельзя
}
example7_1_6();
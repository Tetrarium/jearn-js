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

  for (const key in obj) {
    console.log(key, ':', obj[key]);
  }
}
// example7_1_5();

function showObj(obj) {
  const fields = []
  for (const key in obj) {
    fields.push(`  ${key}: ${obj[key]}`);
  }

  console.log('{\n' + fields.join('\n') + '\n}');
} 

function example7_1_6() {
  const obj = {
    prop1: 'val1',
    prop2: 'val2',
  }

  obj.prop3 = 'val3',

  Object.seal(obj);
  // obj.prop4 = 'val4'; // нельзя
  obj.prop1 = 'val5'; // можно
  console.log(obj);
  console.log(Object.getOwnPropertyDescriptors(obj));
  // Object.defineProperty(obj, 'val2', {writable: false}); // нельзя

  showObj(obj);
}
// example7_1_6();


function example7_1_7() {
  // Object.freeze(obj)
  const obj = {
    prop1: 'val1',
    prop2: 'val2',
  }

  obj.prop3 = 'val3',

  Object.freeze(obj);
  console.log(Object.getOwnPropertyDescriptors(obj));
  // obj.prop4 = 'val4' // TypeError
  // obj.prop1 = 'val5'; // TypeError
}
// example7_1_7();


function example7_1_8() {
  const obj = {
    prop1: 'val1',
    prop2: {
      subprop1: 'val2',
    }
  }

  Object.freeze(obj);
  // obj.prop2 = 'val3'; // TypeError
  obj.prop2.subprop1 = 'val4' // можно
  console.log(obj);

  console.log(Object.getOwnPropertyDescriptors(obj));
  console.log(Object.getOwnPropertyDescriptors(obj.prop2));
  console.log(Object.getOwnPropertyDescriptors(obj.prop1)); // У символов стоки тоже есть дискрипторы
}
// example7_1_8();


function example7_1_9() {
  console.log(Object.getOwnPropertyDescriptors('a'));
  // 'a'.length = 2;

  console.log(Object.getOwnPropertyDescriptors(1));

  console.log(Object.getOwnPropertyDescriptors(Symbol('a')));

  console.log(Object.getOwnPropertyDescriptors(true));

  console.log(Object.getOwnPropertyDescriptors(BigInt(1)));

  // console.log(Object.getOwnPropertyDescriptors(null));

  // console.log(Object.getOwnPropertyDescriptors(undefined));

  console.log(Object.getOwnPropertyDescriptors([1, 2]));

  console.log(Object.getOwnPropertyDescriptors(new Set('asdf')));

  console.log(Object.getOwnPropertyDescriptors(new Map()));

  console.log(Object.getOwnPropertyDescriptors(() => {}));

  console.log(Object.getOwnPropertyDescriptors(function fn(a, b) { return a + b }));
}
// example7_1_9();


function showCheckConstraints(obj) {
  console.log('object has:')
  console.log(`- isExtensible: ${Object.isExtensible(obj)}`);
  console.log(`- isSealed: ${Object.isSealed(obj)}`);
  console.log(`- isFrozen: ${Object.isFrozen(obj)}`);
  console.log('------')
}

function example7_1_10() {
  const obj1 = {
    prop1: 'asdf',
  }
  showCheckConstraints(obj1);

  Object.preventExtensions(obj1);
  showCheckConstraints(obj1);
  const copyObj1 = Object.assign({}, obj1);
  showCheckConstraints(copyObj1);
  console.log(Object.getOwnPropertyDescriptors(obj1));
  console.log(Object.getOwnPropertyDescriptors(copyObj1));

  const obj2 = {
    prop1: 'val1',
  }
  Object.seal(obj2);
  showCheckConstraints(obj2);
  console.log(Object.getOwnPropertyDescriptors(obj2));
  const copyObj2 = Object.assign({}, obj2);
  console.log(Object.getOwnPropertyDescriptors(copyObj2));
  showCheckConstraints(copyObj2);


  const obj3 = {
    prop1: 'val1',
  }
  Object.freeze(obj3);
  showCheckConstraints(obj3);
  showObj(obj3);
  const copyObj3 = Object.assign({}, obj3);
  console.log(Object.getOwnPropertyDescriptors(obj3));
  console.log(Object.getOwnPropertyDescriptors(copyObj3));
  showCheckConstraints(copyObj3);
}
// example7_1_10();


function example7_1_11() {
  // check myBind with frozenObject
  const obj = {
    prop: 'val'
  }
  Object.freeze(obj);

  function fn() {
    console.log(this.prop);
  }

  const fnBindObj = fn.bind(obj);
  fnBindObj();

  Function.prototype.myBind = function(ctx, ...bindArgs) {
    const method = Symbol('m');

    const thisArg = Object.assign({
      [method]: this,
    }, ctx);


    return (...args) => {
      return thisArg[method](...bindArgs, ...args);
    }
  }

  const fnMyBindObj = fn.myBind(obj);
  fnMyBindObj();

  function mul(a, b) {
    return a * b;
  }

  const double = mul.bind(null, 2);
  console.log(double(3));
}
example7_1_11();

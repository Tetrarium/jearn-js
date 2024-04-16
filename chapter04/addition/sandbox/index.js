"use strict";

// const point = {
//   x: 10,
//   y: 20,
// };

// // console.log(point);
// // console.log(point.__proto__);

// const point3D = {
//   z: 30,
//   __proto__: point,
// };

// console.log(point3D);
// console.log(point3D.__proto__);
// console.log(point3D.__proto__ === point);
// console.log(point3D.x);
// console.log(point3D.y);
// console.log(point3D.z);
// console.log(point3D.hasOwnProperty('z'));
// console.log(point3D.hasOwnProperty('x'));

// const point3DCopy = Object.create(point3D);

// console.log(point3DCopy);
// point3DCopy.getVolume = function () {
//   return this.x * this.y * this.z;
// };

// console.log(point3DCopy);
// console.log(point3DCopy.getVolume());
// console.log(point3DCopy.__proto__);
// console.log(point3DCopy.__proto__.__proto__);
// console.log(point3DCopy.__proto__.__proto__.__proto__);
// console.log(point3DCopy.__proto__.__proto__.__proto__.__proto__);

// console.log(Object.prototype);
// console.log(point3DCopy.__proto__.__proto__.__proto__ === Object.prototype);
// console.log(point.__proto__ === Object.prototype);
// console.log(point.__proto__.__proto__.__proto__);

// const empty = {};
// console.log(empty.toString);
// console.log(empty.x);

// const dict = Object.create(null);
// console.log(dict.toString);

// const protoA = { x: 10 };
// const protoB = { x: 20 };
// const objC = Object.create(protoA);
// const objD = new Object(protoA);

// console.log(objC);
// console.log(objD);
// console.log(objD === protoA);

// function Letter(number) {
//   this.number = number;
// }

// Letter.prototype.getNumber = function () {
//   return this.number;
// };

// const a = new Letter(1);
// const b = new Letter(2);

// console.log(a.getNumber());
// console.log(Letter.prototype);
// console.log(Letter.__proto__);
// console.log(Letter.prototype.constructor);
// console.log(Letter.prototype.constructor.__proto__);
// console.log(Letter.prototype.__proto__ === Object.prototype);
// console.log(Letter.__proto__ === Function.prototype);

/**
 * Контекст исполнения
 */

// function recursive(flag) {
//   if (flag === 2) {
//     return;
//   }

//   console.log(flag);
//   recursive(++flag);
// }

// recursive(0);

// function* gen() {
//   yield 1;
//   return 2;
// }

// const g = gen();

// console.log(g.next());
// console.log(g.next());

/**
 * Лексическое окружение
 */

// const x = 10;
// const y = 20;

// function foo(z) {
//   const x = 100;

//   return x + y + z;
// }

// console.log(foo(30));

// var x = 10;

// let y = 20;

// console.log(x, y);

// console.log(this.x, this.y);

// this.z = 123;

// console.log(z);

// function Person(name) {
//   var name = name;
//   console.log(name);

//   this.getName = function () {
//     return this.name;
//   };
// }

// const vasya = new Person('Vasya');
// console.log(vasya.getName());

/**
 * Замыкания
 */

// пример нисходящей фунарг проблемы
// const x = 10;

// function foo() {
//   console.log(x);
// }

// function bar(funArg) {
//   const x = 20;

//   funArg();
// }

// bar(foo);

// Пример восходящей фунарг проблемы
// function foo() {
//   const x = 10;

//   function bar() {
//     return x;
//   }

//   return bar;
// }

// const x = 20;

// const bar = foo();
// console.log(bar());

// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       return count;
//     },

//     decrement() {
//       count--;
//       return count;
//     }
//   };
// }

// const counter = createCounter();

// console.log(
//   counter.increment(),
//   counter.decrement(),
//   counter.decrement(),
// );

/**
 * this
 */

// class Point {
//   constructor(x, y) {
//     this._x = x;
//     this._y = y;
//   }

//   getX() {
//     return this._x;
//   }

//   getY() {
//     return this._y;
//   }
// }

// const p1 = new Point(1, 2);
// const p2 = new Point(3, 3);

// console.log(
//   p1.getX(),
//   p2.getX(),
// );

// const Movable = {
//   move(x, y) {
//     this._x = x;
//     this._y = y;
//   },
// };

// Object.assign(p1, Movable);

// p1.move(100, 200);

// console.log(p1.getX());

// function foo() {
//   return this;
// }

// const bar = {
//   foo,

//   baz() {
//     return this;
//   },
// };

// console.log(foo());
// console.log(bar.foo());
// console.log((bar.foo)());
// console.log(bar.foo = bar.foo);
// console.log((bar.foo = bar.foo)());

// const obj = {
//   a: 10,
//   b: 20,

//   getAny() {
//     return {
//       a: 30,
//       b: 40,

//       arrowF: () => {
//         return this;
//       }
//     };
//   }
// };

// const getAny = obj.getAny;

// console.log(obj);                     // obj
// console.log(obj.getAny());            // innerObj
// console.log(obj.getAny().arrowF());   // obj
// console.log(getAny());                // innerObj
// console.log(getAny().arrowF());       // global / undefined

// const vm = require('vm');
// // console.log(vm);
// const realm1 = vm.createContext({ x: 10, console });
// const realm2 = vm.createContext({ x: 20, console });

// const code = `console.log(x);`;

// vm.runInContext(code, realm1);
// vm.runInContext(code, realm2);

// console.log(this);

// function logThis() {
//   console.log(this);
// }

// logThis();

// const foo = { x: 10 };

// const bar = {
//   x: 20,

//   test: function () {
//     console.log(this === bar);
//     console.log(this.x);

//     // this = foo; // SyntaxError
//   }
// };

// bar.test();
// foo.test = bar.test;
// foo.test();

// function foo() {
//   console.log(this);
// }

// foo();

// console.log(foo === foo.prototype.constructor);

// foo.prototype.constructor();
// console.log(foo.prototype);
// console.log(foo.prototype === foo.prototype.constructor());

// const foo = {
//   bar: function () {
//     console.log(this);
//     console.log(this === foo);
//   }
// };

// foo.bar();

// const exampleFunc = foo.bar;

// console.log(exampleFunc === foo.bar);

// exampleFunc();

// (function () {
//   console.log(this);
// })();

// const foo = {
//   bar: function () {
//     console.log(this);
//   }
// };

// foo.bar();
// (foo.bar)();

// (foo.bar = foo.bar)();
// (true && foo.bar)();
// (foo.bar, foo.bar)();

function User() {
  this.name = 'Uasya';

  return this;
}

console.log(User());
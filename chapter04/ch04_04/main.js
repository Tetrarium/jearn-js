// 'use strict';

// 4.4 Методы объекта, "this"

// const user = {
//   name: 'John',
//   age: 30,
// };

// user.sayHi = function () {
//   console.log('Hello!');
// };

// user.sayHi();

// const user = { name: 'John' };
// const admin = { name: 'Admin' };

// function sayHi() {
//   console.log(this);
//   console.log(`Hello, ${this.name}`);
// }

// user.f = sayHi;
// admin.f = sayHi;

// // sayHi();
// user.f();
// admin.f();

// const user = {
//   name: 'Alex',
//   sayName() {
//     const arrow = () => console.log(this);
//     return arrow;
//   }
// };

// console.log(user);
// user.sayName();
// console.log(user.sayName());
// user.sayName()(); // Контекст - user

// const sayName = user.sayName; // Контекст global | undefined
// sayName()();
// const arrow = sayName();
// arrow();
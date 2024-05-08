/**
 * Преобразование объектов в примитивы
 *
 * https://learn.javascript.ru/object-toprimitive
 */

// const obj1 = {
//   val: 'value1',
// };

// const obj2 = {
//   val: 'value2'
// };

// console.log(obj1 + obj2);
// console.log(obj1 - obj2);
// console.log(obj1 * obj2);
// console.log(obj1 / obj2);
// console.log(obj1.toString());
// console.log(obj1.valueOf());
// console.log(obj1.valueOf() === obj1);

/**
 * toPrimitive
 */

// const user = {
//   name: 'John',
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);

//     return hint === 'string' ? `{name: "${this.name}"}` : this.money;
//   }
// };

// const user = {
//   name: 'John',
//   money: 1000,

//   toString() {
//     return `{name: "${this.name}"}`;
//   },

//   valueOf() {
//     return this.money;
//   }
// };

// console.log(user + '');
// console.log(user.toString());
// console.log('a' + user);
// alert(user);
// console.log(+user);

// const user = { name: 'John' };
// console.log('' + user);
// console.log(user.valueOf() === user);

// Как сделать чтобы объект:
// был равен определенному числу?
// (() => {
//   const obj = {
//     [Symbol.toPrimitive]() {
//       return 2;
//     }
//   };

//   console.log(obj == 2);
//   console.log(obj == 3);
// })();


// был равен определенной строке?
// (() => {
//   const obj = {
//     [Symbol.toPrimitive]() {
//       return 'something';
//     }
//   };

//   console.log(obj == 'something');
//   console.log(obj == 2);
// })();


// obj > 0 // true Как это сделать
// (() => {
//   const obj = {
//     [Symbol.toPrimitive]() {
//       return Infinity;
//     }
//   };

//   console.log(obj > 0);
//   console.log(obj > 1000);
//   console.log(obj < 1000);
// })();


// String(obj < 0) + String(obj < 0) // "truefalse"
// (() => {
//   const obj = {
//     [Symbol.for('num')]: Infinity,

//     [Symbol.toPrimitive]() {
//       return this[Symbol.for('num')] = -this[Symbol.for('num')];
//     },

//   };

//   console.log(String(obj < 0) + String(obj < 0));
// })(); 
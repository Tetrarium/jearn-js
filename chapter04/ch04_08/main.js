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

const user = {
  name: 'John',
  money: 1000,

  toString() {
    return `{name: "${this.name}"}`;
  },

  valueOf() {
    return this.money;
  }
};

console.log(user + '');
console.log(user.toString());
console.log('a' + user);
// alert(user);
console.log(+user);

// const user = { name: 'John' };
// console.log('' + user);
// console.log(user.valueOf() === user);
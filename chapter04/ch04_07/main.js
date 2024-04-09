/**
 * 4.7 Тип данных Symbol
 * 
 * https://learn.javascript.ru/symbol
 */

// const id1 = Symbol('id');
// const id2 = Symbol('id');

// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);
// // alert(id1);
// console.log(id1.toString());
// // alert(id1.toString());
// console.log(id1.description);
// console.log(id2.description);
// console.log(id1.description === id2.description);

// const id = Symbol('id');

// const user = {
//   name: 'Uasya',
//   age: 30,
//   isAdmin: false,
//   [id]: 5
// };

// for (let prop in user) {
//   console.log(`${prop} = ${user[prop]}`);
// }

// console.log(user[id]);

// const copyUser = Object.assign({}, user);
// console.log('Объекты равны', user === copyUser);
// console.log('copyUser', copyUser[id]);
// console.log('id равны', user[id] === copyUser[id]);

// const copyStructured = structuredClone(user);
// console.log(user);
// console.log(copyStructured);
// console.log(copyStructured[id]);

// console.log(Object.keys(user));
// console.log(Object.entries(user));
// console.log(Object.values(user));

/**
 * Глобальный реестр символов
 */

// const id3 = Symbol.for('id');
// const symbolAgain = Symbol.for('id');

// console.log(symbolAgain === id3);
// console.log(id3.description);
// console.log(Symbol.keyFor(id3));

// const globalSymbol = Symbol.for('name');
// const localSymbol = Symbol('name');

// console.log(Symbol.keyFor(globalSymbol));
// console.log(Symbol.keyFor(localSymbol));

// console.log(globalSymbol.description);
// console.log(localSymbol.description);

const localS = Symbol('local');
const globalS = Symbol.for('global');

const obj = {
  val: 'value',
  [localS]: 'local',
  [globalS]: 'global',
};

console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));


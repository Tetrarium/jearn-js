/**
 * Конструктор, оператор "new"
 * https://learn.javascript.ru/constructor-new#funktsiya-konstruktor
 *
 * Примеры из учебника
 */

/** Функция - конструктор */

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }

//   this.name = name;
//   this.isAdmin = false;

//   console.log(new.target === User);
// }

// const user = new User('Jack');
// const user2 = User('John');

// console.log(user);
// console.log(user2);

// Если функция-конструктор вызывается с оператором new она возвращает ссылку на объект
// Если без new - то возвращает undefined

/**
 * Какие типы данных можно хранить в объекте
 */

// const obj = {
//   number: 1,
//   string: 'str',
//   bigInt: BigInt(123),
//   boolean: true,
//   null: null,
//   und: undefined,
//   sym: Symbol('abc'),
//   obj: { prop: 'val' },
// };

// console.log(obj);

/**
 * Создание методов в конструкторе
 */

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`Привет! Меня зовут ${this.name}`);
  };
}

const uasya = new User('Uasya');
uasya.sayHi();

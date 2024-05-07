// from Yandex

// 1. Создайте объект user с именем и возрастом,
// и преобразуйте его в примитив при выводе на экран с помощью alert().

// Вариант 1.
// (() => {
//   const user = {
//     name: 'Alex',
//     age: 30,

//     [Symbol.toPrimitive](hint) {
//       console.log(hint);
//       return (hint === 'string')
//         ? `Name: ${this.name}; Age: ${this.age};`
//         : '';
//     }
//   };

//   alert(user);
// })();

// Вариант 2
// (() => {
//   const user = {
//     name: 'Alex',
//     age: '35',

//     toString() {
//       return `name: ${this.name};\nage: ${this.age}`;
//     }
//   };

//   alert(user);
// })();


// 2. Создайте объект user с именем и возрастом,
// и преобразуйте его в примитив при сложении с другим объектом.


// 3. Создайте объект user с именем и возрастом,
// и преобразуйте его в примитив при вычитании из другого объекта.;

// (() => {
//   function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this[Symbol.toPrimitive] = function (hint) {
//       console.log(hint);
//       return hint === 'string' || hint === 'default'
//         ? this.name
//         : this.age;
//     };
//   }

//   const vasya = new User('Uasya', 123);
//   const petya = new User('Petya', 456);

//   console.log(vasya + petya);
//   console.log(vasya - petya);
// })();


/**
 * from ChatGPT
 */

// 1. Преобразование в строку:
//  - Создайте объект book с полями title, author и year.
//  - Напишите метод toString(), который будет возвращать строку
//    вида "Название: [title], Автор: [author], Год: [year]".
//  - Выведите объект book в консоль, используя функцию console.log().

// (() => {
//   const book = {
//     title: 'The Adventures of Cipollino, the Little Onion',
//     author: 'Gianni Rodari',
//     year: 1951,

//     toString() {
//       return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`;
//     }
//   };

//   console.log(book.toString());
// })();


// 2. Преобразование в число:
//  - Создайте объект temperature с полем value, содержащим температуру 
//    в градусах Цельсия.
//  - Напишите метод valueOf(), который будет возвращать численное значение
//    температуры в градусах Цельсия.
//  - Выведите объект temperature в консоль, используя оператор сложения с числом.

// (() => {
//   const temperature = {
//     value: 36.6,

//     valueOf() {
//       return this.value;
//     }
//   };

//   console.log(temperature + 0);
// })();


// 3. Преобразование в логическое значение:
//  - Создайте объект user с полями name и age.
//  - Напишите метод valueOf(), который будет возвращать логическое значение true,
//    если у объекта есть имя, и false в противном случае.
//  - Выведите объект user в консоль, используя оператор!(отрицание).

(() => {
  function User(name) {
    this.name = name;

    this.valueOf = function () {
      return !!(this.name && this.name.length);
    };
  }

  console.log((new User('vasya')).valueOf());
  console.log((new User('')).valueOf());
  console.log((new User()).valueOf());
})();


// 4. Смешанное преобразование:
//  - Создайте объект point с полями x и y, представляющими координаты точки на плоскости.
//  - Напишите метод toString(), который будет возвращать строку вида "Координаты: [x], [y]".
//  - Напишите метод valueOf(), который будет возвращать сумму координат x и y.
//  - Выведите объект point в консоль, используя оператор сложения с числом.;
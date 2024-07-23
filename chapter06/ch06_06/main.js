console.log('Chapter 6.6');

// function sayHi() {
//   console.log('Hi');
// }

// const fname = sayHi.name;
// console.log(fname);
// window[fname]();

// const sayHi = function() {
//   console.log('Hi!');
// }

// const fname = sayHi.name;
// console.log(fname);
// window[fname](); // А вот тут не работает, поскольку свойством window становится только Function Declaration
// console.log(window[fname]);

// const user = {
//   sayHi() {

//   },

//   sayBy() {

//   }
// }

// console.log(user.sayHi.name);
// console.log(user.sayBy.name);

// function foo() { console.log('function foo') }

// const bar = foo;
// console.log(bar.name);

// window[bar.name]();


// const arr = [function(){}];
// console.log(arr[0].name);

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...rest) {}

// console.log(f1.length);
// console.log(f2.length);
// console.log(many.length);


// function ask(question, ...handlers) {
//   const isYes = confirm(question);

//   for (const handler of handlers) {
//     if (handler.length === 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }
// }

// ask('Вопрос?', () => console.log('Вы ответили да'), result => console.log(result));


// function sayHi() {
//   console.log('Hi!');

//   sayHi.counter++;
// }

// sayHi.counter = 0;

// sayHi();
// sayHi();

// console.log(sayHi.counter);

// sayHi();
// console.log(sayHi.counter);


// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;

//   return counter;
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter());
// console.log(counter2());


// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func('Guest');
//   }
// }

// sayHi('Alex');
// sayHi();
// console.log(sayHi.name);

// const welcome = sayHi;
// sayHi = null;

// welcome();
// console.log(welcome.name)

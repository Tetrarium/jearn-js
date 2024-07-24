console.log('Chapter 6.8');

// setTimeout(console.log, 1000, 'Hello', 'World');

// function sayHi(phrase, who) {
//   console.log(phrase + ', ' + who);
// }

// setTimeout(sayHi, 1000, 'Hello', 'World');


// setTimeout('console.log("Hello")', 1000);



// const timerId = setTimeout(() => console.log('nothing'), 1000);
// console.log(timerId);
// clearTimeout(timerId);
// console.log(timerId);


// const timerId = setInterval(() => console.log('tick'), 2000);
// setTimeout(() => {clearInterval(timerId); console.log('stop')}, 5000);


// let timerId = setTimeout(function tick() {
//   console.log('tick', timerId);
//   timerId = setTimeout(tick, 2000);
// }, 2000);



// setTimeout(() => console.log('World'));
// console.log('Hello');

// const start = Date.now();
// const times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);

//   if (start + 100 < Date.now()) console.log(times);
//   else setTimeout(run);
// });

'use strict';

console.log('Chapter 6.2');

function example6_2_1() {
  function sum(a, b, ...rest) {
    console.log(rest);
    return a + b;
  }

  console.log(sum(1, 2, 3, 4, 5));
}
// example6_2_1();

function example6_2_2() {
  function sumAll(...args) {
    let sum = 0;

    for (let num of args) {
      sum += num;
    }

    return sum;
  }

  console.log( sumAll(1) );
  console.log( sumAll(1,2) );
  console.log( sumAll(1, 2, 3) );
  console.log( sumAll(1, 2, 3, 4) );
}
// example6_2_2();


function example6_2_3() {
  const arr = [2, 4, 5, 1];

  console.log(Math.max(...arr));

  const str = 'Hello World';

  console.log([str]);
  console.log([...str]);
}
example6_2_3();

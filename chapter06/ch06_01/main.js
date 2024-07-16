"use strict";
console.log('Chapter 6.1');

function example6_1_1() {
  console.log('Итеративный pow(x, n)');

  function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }

  console.log(pow(2, 2));
  console.log(pow(2, 3));
  console.log(pow(2, 4));
}
// example6_1_1();


function example6_1_2() {
  console.log('Рекурсивный pow(x, n)');
  function pow(x, n) {
    if (n < 0) {
      return 1 / pow(x, -n);
    }
    return n === 0
      ? 1
      : x * pow(x, n - 1);
  }

  console.log(pow(2, 0));
  
  console.log(pow(2, 2));
  console.log(pow(2, 3));
  console.log(pow(2, 4));

  console.log(pow(2, -1));
  console.log(pow(2, -2));
  console.log(pow(2, -3));
}
// example6_1_2();


function example6_1_3() {
  console.log('example 6.1.3');
  const company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

  function sumSalaries(department) {
    if (Array.isArray(department)) {
      return department.reduce((prev, current) => prev + current.salary, 0);
    }

    let sum = 0;

    for (const subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }

    return sum;
  }

  console.log(sumSalaries(company));
}
// example6_1_3();

import { fib } from "./tasks.js";
console.log(fib(77));

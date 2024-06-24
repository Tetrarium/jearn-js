'use strict';

console.log('Chapter 5.9');

function example5_9_1() {
  const user = {
    name: 'John',
    age: 29,
    isAdmin: true,
  };

  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));

  for (let value of Object.values(user)) {
    console.log(value);
  }

  for (let key of Object.keys(user)) {
    console.log(key);
  }

  for (let entire of Object.entries(user)) {
    console.log(entire);
  }
}
// example5_9_1();


function example5_9_2() {
  const prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  const doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2]),
  );

  console.log(prices);
  console.log(doublePrices);
}
// example5_9_2();

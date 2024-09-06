"use strict";
console.log("Chapter 9.5");


const example9_5_1 = () => {
  class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }

    static get [Symbol.species]() {
      return function () {};
    }
  }

  const arr = new PowerArray(1, 2, 5, 10, 50);
  console.log(arr.isEmpty());

  const filteredArray = arr.filter(item => item >= 10);
  console.log(filteredArray);
  // console.log(filteredArray.isEmpty());

  const newArr = new PowerArray();
  console.log(newArr);
  console.log(newArr.isEmpty());

  console.log(arr.constructor === PowerArray);
  console.log(filteredArray.constructor === PowerArray);
  console.log(filteredArray.constructor);
}
// example9_5_1();

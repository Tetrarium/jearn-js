"use strict";

// (() => {
//   const fruits = ['Apple', 'Orange', 'Plum'];
//   console.log(fruits.at(-1));
// })();

// (() => {
//   Array.prototype.myPop = function () {
//     if (this.length === 0) {
//       return undefined;
//     }
//     const lastElem = this[this.length - 1];

//     this.length = this.length - 1;

//     return lastElem;
//   };

//   const arr = ['Mango', 'Pineapple', 'Apple', 'Pen'];
//   const lastElem = arr.myPop();
//   console.log(arr);
//   console.log(lastElem);
//   console.log(arr[arr.length]);

//   const arr2 = [];
//   console.log(arr2.pop());
//   console.log(arr2);
//   console.log(arr2.myPop());
// })();

// (() => {
//   Array.prototype.myPush = function (...args) {
//     for (let i = 0; i < args.length; i++) {
//       this[this.length] = args[i];
//     }

//     return this.length;
//   };

//   const arr = ['Pineapple', 'apple', 'pen'];

//   const len1 = arr.push('Mango');
//   console.log(len1);
//   console.log(arr);

//   const len2 = arr.push('Kiwi', 'Orange');
//   console.log(len2);
//   console.log(arr);
// })();

// (() => {
//   Array.prototype.myShift = function () {
//     if (this.length === 0) {
//       return undefined;
//     }

//     const firstElem = this[0];

//     for (let i = 1; i < this.length; i++) {
//       this[i - 1] = this[i];
//     }

//     this.length -= 1;
//     return firstElem;
//   };

//   const arr = ['Pineapple', 'apple', 'pen'];
//   const elem = arr.myShift();
//   console.log(elem);
//   console.log(arr);

//   const arr2 = [];
//   console.log(arr2.shift());
//   console.log(arr2);

//   console.log(arr2.myShift());
// })();

(() => {
  Array.prototype.myUnshift = function (...args) {
    const shift = args.length;
    const currentLength = this.length;
    const newLength = currentLength + shift;

    for (let i = newLength - 1; i >= shift; i--) {
      this[i] = this[i - shift];
    }

    for (let i = 0; i < shift; i++) {
      this[i] = args[i];
    }

    return newLength;
  };

  const arr = ['Pineapple', 'apple', 'pen'];
  console.log(arr.myUnshift('Mango'));
  console.log(arr);
  console.log(arr.myUnshift());
  console.log(arr);
  console.log(arr.myUnshift('Orange', 'Pear'));
  console.log(arr);
  console.log(arr.unshift());
  console.log(arr.unshift('Watermelon', 'Blueberry'));
  console.log(arr);
})();
"use strict";
console.log('Chapter 8.3');

function example8_3_1() {
  const obj = {};
  console.log(obj.__proto__ === Object.prototype);
  console.log(obj.toString === obj.__proto__.toString);
  console.log(obj.toString === Object.prototype.toString);
}
// example8_3_1();


function example8_3_2() {
  console.log(Date.prototype);
  console.log(Date.__proto__ === Function.prototype);

  console.log(Array.__proto__ === Function.prototype);
  console.log(Date.prototype);
}
// example8_3_2();

function example8_3_3() {
  const arr = [];

  console.log(arr.__proto__ === Array.prototype);
  console.log(arr.__proto__.__proto__ === Object.prototype);

  console.log(Object.__proto__ === Function.prototype);
  console.log(Function.__proto__ === Function.prototype);
  console.log(Object.prototype.__proto__);
}
// example8_3_3();

function example8_3_4()  {
  const arr = [1, 2, 3];

  Array.prototype.toString = Object.prototype.toString;

  console.log(arr.toString());

  console.dir(arr);
}
// example8_3_4()


function example8_3_5() {
  console.dir(Function.prototype);

  function foo() {}

  console.dir(foo.prototype);
  console.dir(foo.__proto__);
}
// example8_3_5();


function example8_3_6() {
  String.prototype.log = function () {
    console.log(this);
  }
  
  'BOOM!'.log();
}
// example8_3_6();


function example8_3_7() {
  String.prototype.myRepeat = function(n) {
    return new Array(n + 1).join(this);
  }

  console.log('La'.myRepeat(3))
}
// example8_3_7();


function example8_3_8() {
  const obj = {
    0: "Hello",
    1: "World",
    length: 2,
  }

  obj.join = Array.prototype.join;

  console.log(obj.join('-'));
}
// example8_3_8();

function example8_3_9() {
  const obj = {
    0: "Hello",
    1: "World",
    length: 2,
  }

  obj.__proto__.join = Array.prototype.join;

  console.log(obj.join('123'));
}
// example8_3_9();

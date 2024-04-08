/**
 * Задача 1. Две функции - один объект
 * 
 * Возможно ли создать функции A и B, чтобы new A() == new B()?
 * 
 * function A() { ... }
 * function B() { ... }
 *
 * let a = new A();
 * let b = new B();
 *
 * alert( a == b ); // true
 */
const testObj = {};

function A() { return testObj; }

function B() { return testObj; }

exports.A = A;
exports.B = B;

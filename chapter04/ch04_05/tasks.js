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

/**
 * Задача 2. Создайте калькулятор при помощи конструктора, new Calculator
 * 
 * Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
 * 
 * read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
 * sum() возвращает сумму этих свойств.
 * mul() возвращает произведение этих свойств.
 * 
 * Например:
 * let calculator = new Calculator();
 * calculator.read();
 *
 * alert( "Sum=" + calculator.sum() );
 * alert( "Mul=" + calculator.mul() );
 * 
 */

function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function () {
    this.a = +prompt('Введите первое число', 0) || 0;
    this.b = +prompt('Введите второе число', 0) || 0;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

exports.Calculator = Calculator;

/**
 * https://www.codewars.com/kata/5121303128ef4b495f000001
 * 
 * function greet(myName, yourName) {
 * return `Hello ${yourName}, my name is ${myName}`;
 * }
 * 
 * Добавить констрктор, чтобы работало следующим образом
 */

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name;           // should == 'Joe

function greet(myName, yourName) {
  return `Привет ${yourName}, меня зовут ${myName}`;
}

export function Person(name) {
  this.name = name;

  this.greet = function (yourName) {
    return greet(this.name, yourName);
  };
}

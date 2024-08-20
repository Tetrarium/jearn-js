"use strict";
console.log('Chapter 8.2');

function example8_2_1() {
  const animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = {
    ...animal,
    constructor: Rabbit,
  };

  const rabbit = new Rabbit('White Rabbit');

  console.log(rabbit.eats);
  console.log(rabbit.__proto__);
  console.log(Rabbit.__proto__);
  console.log(rabbit.constructor);
  console.log(rabbit.__proto__.constructor);

  const rabbit2 = new rabbit.constructor('Black Rabbit');
  console.log(rabbit2);

  console.log(Rabbit.prototype === rabbit.__proto__);
  console.log(rabbit.prototype);

  console.log(Object('obj'));
  console.log(new Object('obj'));
  console.log(Object([1, 2, 3]));
}
example8_2_1();

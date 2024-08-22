"use strict";
console.log('Chapter 8.4');

function example8_4_1() {
  const animal = {
    eats: true,
  };

  const rabbit = Object.create(animal);
  rabbit.bounce = 'Bounce';

  console.log(rabbit);
  console.log(rabbit.eats);
  console.log(Object.getPrototypeOf(rabbit));
  console.log(Object.getPrototypeOf(rabbit) === animal);

  console.log(Object.setPrototypeOf(rabbit, {}));

  console.log(rabbit.eats);
}
// example8_4_1();


function example8_4_2() {
  const animal = {
    eats: true,
  };

  const rabbit = Object.create(animal, {
    jumps: {
      value: true,
    }
  });

  console.log(rabbit);
  console.log(Object.keys(rabbit));

  for (const key in rabbit) {
    console.log(key);
  }

  console.log(Object.getOwnPropertyDescriptors(rabbit));

  const cloneRabbit = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));
  console.log(cloneRabbit);
  console.log(rabbit);
  console.log(rabbit === cloneRabbit);
  console.log(rabbit.__proto__ === cloneRabbit.__proto__);
}
// example8_4_2();


function example8_4_3() {
  const obj = Object.create(null);

  // alert(obj);

  const key = prompt('What is the key?', '__proto__');
  obj[key] = 'some value';

  console.log(obj);

}
// example8_4_3();

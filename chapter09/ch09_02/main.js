"use strict";
console.log('Chapter 9.2');

const example9_2_1 = () => {
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} is stopping`);
    }
  }

  const animal = new Animal('My animal');
  console.log(animal);
  animal.run(10);
  console.log(animal);
  animal.stop();
  console.log(animal);

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} is hiding!`);
    }
  }

  const whiteRabbit = new Rabbit('White rabbit');
  console.log(whiteRabbit);
  whiteRabbit.run(10);
  console.log(whiteRabbit);
  whiteRabbit.stop();
  console.log(whiteRabbit);
  whiteRabbit.hide();

  console.log(whiteRabbit.__proto__);
  console.log(whiteRabbit.__proto__.__proto__ === Animal.prototype);
  console.log(Rabbit.prototype);
  console.log(Rabbit.prototype === new Animal('any'));
}
// example9_2_1();


const example9_2_2 = () => {
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} is stopping.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} is hiding`);
    }

    stop() {
      super.stop();
      this.hide();
    }
  }

  const rabbit = new Rabbit('White rabbit');

  rabbit.run(22);
  rabbit.stop();
}
// example9_2_2();


const example9_2_3 = () => {
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  }

  const rabbit = new Rabbit('White rabbit', 10);
  console.log(rabbit);
}
// example9_2_3();


const example9_2_4 = () => {
  class Animal {
    name = 'animal'

    constructor() {
      console.log(this.name);
    }
  }

  class Rabbit extends Animal {
    name = 'rabbit'
  }

  const animal = new Animal();
  const rabbit = new Rabbit();

  console.log(animal);
  console.log(rabbit);
}
// example9_2_4();


const example9_2_5 = () => {
  class Animal {
    showName() {
      console.log('animal')
    }

    constructor() {
      this.showName();
    }
  }

  class Rabbit extends Animal {
    showName() {
      console.log('rabbit');
    }
  }

  new Animal();
  new Rabbit();
}
// example9_2_5();


const example9_2_6 = () => {
  const animal = {
    name: 'Animal',

    eat() {
      console.log(`${this.name} is eating`);
    }
  }

  const rabbit = {
    __proto__: animal,
    name: 'Rabbit',

    eat() {
      this.__proto__.eat.call(this);
    }
  }

  rabbit.eat();

  const longEar = {
    __proto__: rabbit,
    eat() {
      this.__proto__.eat.call(this);
    }
  }

  longEar.eat();
}
// example9_2_6();


const example9_2_7 = () => {
  const animal = {
    name: "Animal",
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }

  const rabbit = {
    __proto__: animal,
    name: 'Rabbit',
    eat() {
      super.eat();
    }
  }

  const longEar = {
    __proto__: rabbit,
    name: 'LongEar',
    eat() {
      super.eat()
    }
  }

  longEar.eat();

  // const longEarEat = longEar.eat;
  // longEarEat();
}
// example9_2_7();


const example9_2_8 = () => {
  const animal = {
    sayHi() {
      console.log('I am Animal');
    }
  }

  const rabbit = {
    __proto__: animal,
    sayHi() {
      super.sayHi();
    }
  }

  const plant = {
    sayHi() {
      console.log('I am Plant');
    }
  }

  const tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi
    // sayHi: animal.sayHi(),
  }

  tree.sayHi();
}
// example9_2_8();


const example9_2_9 = () => {
  const animal = {
    name: 'Animal',
    eat: function() {
      console.log(`${this.name} is eating`);
    }
  }

  const rabbit = {
    __proto__: animal,
    name: 'Rabbit',
    // eat: function() {
    //   super.eat();
    // }
    eat() {
      super.eat();
    }
  }

  rabbit.eat();
} 
// example9_2_9();


const example9_2_10 = () => {
  // Я нихрена на понял возни с [[HomeObject]]
  const parent = {
    name: 'Parent',
    getName() {
      return this.name;
    }
  }
  const child = {
    __proto__: parent,
    name: 'Child',
  }
  // Когда
  // простое наследование методов через прототипы
  // прекрасно работает
  // и
  console.log(child.getName()) // выведет Child
}
// example9_2_10();

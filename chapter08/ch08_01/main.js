"use strict";
console.log('Chapter 8.1');

function example8_1_1() {
  const animal = {
    eats: true,
  };

  const rabbit = {
    jumps: true,
  }

  console.log(rabbit.__proto__);
  console.log(rabbit.__proto__ === Object.prototype);
  console.log(rabbit.eats);

  rabbit.__proto__ = animal;
  console.log(rabbit.__proto__);
  console.log(rabbit.jumps);
  console.log(rabbit.eats);
}
// example8_1_1();


function example8_1_2() {
  const animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  }

  rabbit.walk();
}
// example8_1_2();


function example8_1_3() {
  const animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  }

  const rabbit = {
    jumps: true,
    __proto__: animal,
  }

  const longEar = {
    earLength: 10,
    __proto__: rabbit,
  }

  longEar.walk();
  console.log(longEar.eats);
  console.log(longEar.jumps);
  console.log(longEar.earLength);

  // animal.__proto__ = longEar; // TypeError: Cyclic __proto__ value
  animal.__proto__ = ''
  console.log(animal.__proto__);

  console.log(Object.getOwnPropertyDescriptor(rabbit, '__proto__'));
  console.log(Object.getPrototypeOf(animal));
}
// example8_1_3();


function example8_1_4() {
  const animal = {
    say() {
      console.log('animal');
    }
  }

  const rabbit = {
    __proto__: animal,
  }

  rabbit.say();

  rabbit.say = function() {
    console.log('rabbit')
  }

  rabbit.say();
  animal.say();
}
// example8_1_4();


function example8_1_5() {
  const user = {
    name: 'John',
    surname: 'Smith',

    /**
     * @param {{ split: (arg0: string) => [string, string]; }} value
     */
    set fullName(value) {
      [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
      console.log(this);
      return `${this.name} ${this.surname}`
    }
  };

  const admin = {
    __proto__: user,
    isAdmin: true,
  }

  console.log('user:', user.fullName);
  console.log('admin:', admin.fullName);

  admin.fullName = 'Alice Cooper';
  console.log('user:', user.fullName);
  console.log('admin:', admin.fullName);
  console.log(admin);
}
// example8_1_5()


function example8_1_6() {
  const animal = {
    walk() {
      if (!this.isSleeping) {
        console.log(`${this.name} is walking`);
      }
    },

    sleep() {
      this.isSleeping = true;
    }
  }

  const rabbit = {
    name: 'White rabbit',
    __proto__: animal,
  }

  rabbit.walk();
  rabbit.sleep();
  rabbit.walk();
  console.log(rabbit);
  console.log(animal.isSleeping);
}
// example8_1_6();


function example8_1_7() {
  const animal = {
    eats: true,
  };

  const rabbit = {
    jumps: true,
    __proto__: animal,
  };

  console.log(Object.keys(rabbit));

  for (const prop in rabbit) console.log(prop);

  for (const prop in rabbit) {
    const isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      console.log(`Our: ${prop}`);
    } else {
      console.log(`Inherited: ${prop}`);
    }
  }

  console.log(animal.__proto__ === Object.prototype);
  console.log(Object.prototype.__proto__);
  console.log(Object.__proto__ === Function.prototype);

  console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty'));
}
// example8_1_7();


function example8_1_8() {
  function Rabbit(name) {
    this.name = name;
  }

  const whiteRabbit = new Rabbit('White');

  console.log(whiteRabbit.__proto__.constructor === Rabbit);
}
// example8_1_8();

function example8_1_9() {
  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach = [...this.stomach, food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  lazy.eat('orange');
  lazy.eat('banana');
  console.log( lazy.stomach ); // apple
  // console.log(hamster.__proto__);
}
// example8_1_9();


function example8_1_10() {
  const obj = {};
  console.log(obj.__proto__.__proto__);

  const arr = []
  console.log(arr.__proto__.__proto__);

  function foo() {}
  console.log(Function.prototype);
  console.log(foo.__proto__.__proto__);

  const set = new Set();
  console.log(set.__proto__.__proto__);

  const str = 'abc';
  console.log(str.__proto__.__proto__);

  const num = 1;
  console.log(num.__proto__);

  const bigint = 1n;
  console.log(bigint);
  console.log(bigint.__proto__.__proto__);

  const bool = true;
  console.log(bool.__proto__);

  const sym = Symbol('s');
  console.log(sym.__proto__.__proto__);

  const varNull = null;
  // console.log(varNull.__proto__);

  const undef = undefined;
  // console.log(undef.__proto__);
}
// example8_1_10();

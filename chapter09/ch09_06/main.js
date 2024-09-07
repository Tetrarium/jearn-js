"use stricts"

console.log('Chapter 9.6');


const example9_6_1 = () => {
  class Rabbit {}

  const rabbit = new Rabbit();

  console.log( rabbit instanceof Rabbit );

  console.log( rabbit instanceof Function);
  console.log(rabbit instanceof Object);

  console.log([] instanceof Array);
  console.log('sss' instanceof String);
  console.log([] instanceof Object);
  console.log(Rabbit instanceof Function);
  console.log(Rabbit instanceof Object);
}
// example9_6_1();


const example9_6_2 = () => {
  class Animal {
    static [Symbol.hasInstance](obj) {
      if (obj.canEat) return true;
    }
  }

  const obj = { canEat: true };

  console.log( obj instanceof Animal);

  function foo() {}
  foo.canEat = true;
  console.log( foo instanceof Animal );
}
// example9_6_2();

const example9_6_3 = () => {
  const toString = Object.prototype.toString;

  console.log(toString.call(2));
  console.log(toString.call(true));
  console.log(toString.call(''));
  console.log(toString.call(1n));
  console.log(toString.call(Symbol()));
  console.log(toString.call(undefined));
  console.log(toString.call(null));
  console.log(toString.call({}));
  console.log(toString.call([]));
  console.log(toString.call(() => {}));
  console.log(toString.call(new Date()));
  console.log(toString.call(new Set()));
  console.log(toString.call(new Map));
  console.log(toString.call(Map));
  console.log(toString.call(new WeakSet()));
}
// example9_6_3();


const example9_6_4 = () => {
  const user = {
    [Symbol.toStringTag]: 'User',
  }

  console.log( {}.toString.call(user) );

  class Animal {
    [Symbol.toStringTag] = 'Animal';
  }

  const animal = new Animal();
  console.log( {}.toString.call(animal) );

  console.log(window[Symbol.toStringTag]);
  console.log( {}.toString.call(window) );

  console.log( {}.toString.call(XMLHttpRequest) );
  console.log( {}.toString.call(new XMLHttpRequest()) );
  console.log( XMLHttpRequest.prototype[Symbol.toStringTag] );
}
// example9_6_4();

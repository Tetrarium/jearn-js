"use strict";
console.log('Chapter 6.10');

function example6_10_1() {
  const user = {
    firstName: 'Uasya',
    sayHi() {
      console.log(`Hello, ${this.firstName}`);
    }
  };

  setTimeout(user.sayHi, 1000);
}
// example6_10_1();

function example6_10_2() {
  const user = {
    firstName: 'Uasya',
    sayHi() {
      console.log(`Hello, ${this.firstName}`);
    }
  };

  setTimeout(() => {
    user.sayHi();
  }, 1000);
}
// example6_10_2();


function example6_10_3() {
  const obj = {
    name: 'any',

    user: {
      name: 'John',
      sayHi() {
        console.log(this);
        console.log(`Hello, ${this.name}`);
      }
    },

    method() {
      setTimeout(this.user.sayHi, 1000);
    }
  }

  obj.method();
}
// example6_10_3();


function example6_10_4() {
  let user = {
    name: 'Uasya',

    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
  }

  setTimeout(() => user.sayHi(), 1000);
  user = {...user, name: 'Petya'};
}
// example6_10_4();


function example6_10_5() {
  let user = {
    name: 'Uasya',
  };

  function foo() {
    console.log(this.name);
  }

  let fooUser = foo.bind(user);
  fooUser();

  setTimeout(fooUser, 1000);
  user = {...user ,name: 'Petya'};
  console.log(user);
}
// example6_10_5();


function example6_10_6() {
  const user = {
    name: 'Uasya',
  };

  function func(phrase) {
    console.log(`${phrase}, ${this.name}`);
  }

  const funcUser = func.bind(user);
  funcUser('Hello');
}
// example6_10_6();


function example6_10_7() {
  const user = {
    name: 'Uasya',
    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
  };

  const sayHi = user.sayHi.bind(user);
  sayHi();
  setTimeout(sayHi, 1000);
}
// example6_10_7();


function example6_10_8() {
  const user = {
    name: 'Uasya',
    say(phrase) {
      console.log(`${phrase}, ${this.name}`);
    }
  };

  const say = user.say.bind(user);
  say('Hello');
  say('Bye');
}
// example6_10_8();


function example6_10_9() {
  function mul(a, b) {
    return a * b;
  }

  const double = mul.bind(null, 2);

  console.log(double(3));
  console.log(double(4));
  console.log(double(5));

  const triple = mul.bind(null, 3);
  console.log(triple(3));
  console.log(triple(4));
  console.log(triple(5));
}
// example6_10_9();


function example6_10_10() {
  function partial(func, ...argsBound) {
    return function(...args) {
      return func.call(this, ...argsBound, ...args);
    }
  }

  const user = {
    name: 'John',
    say(time, phrase) {
      console.log(`[${time}] ${this.name}: ${phrase}!`);
    }
  };

  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  user.sayNow('Hello');
}
example6_10_10();

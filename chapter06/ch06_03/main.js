// "use strict"

console.log('Chapter 6.3');

function example6_3_1() {
  {
    const message = 'Hello';
    console.log(message);
  }

  console.log(message);
}
// example6_3_1();


function example6_3_2() {
  function sayHiBy(firstName, lastName) {
    function getFullName() {
      return firstName + ' ' + lastName;
    }

    console.log('Hello, ' + getFullName());
    console.log('Bye, ' + getFullName());
  }

  sayHiBy('John', 'Doe');
}
// example6_3_2();


function example6_3_3() {
  function makeCounter() {
    let count = 0;

    return function() {
      return count++;
    }
  }

  const counter = makeCounter();
  const counter2 = makeCounter();

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter2());
  console.log(counter2());
  console.log(counter());
  console.dir(counter);
  console.dir(counter2);
}
// example6_3_3();


function example6_3_4() {
  function f() {
    const value = 123;
    const any = 456;

    return function() {
      console.log(value);
    }
  }

  const g = f();
  console.dir(g);
  g();
}
// example6_3_4();


function example6_3_5() {
  function f() {
    const value = Math.random();
  
    return function() {
      console.log(value);
    }
  }
  const arr = [f(), f(), f()];

  console.dir(arr);
}
// example6_3_5();

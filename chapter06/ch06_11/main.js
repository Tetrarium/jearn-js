"use strict";
console.log('Chapter 6.11');

function example6_11_1() {
  const group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],

    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };

  group.showList();
}
// example6_11_1();


function example6_11_2() {
  const group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],

    showList() {
      this.students.forEach(function(student) {
        console.log(this.title + ': ' + student);
      });
    }
  }

  group.showList();
}
// example6_11_2();


function example6_11_3() {
  function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    }
  }

  function sayHi(who) {
    console.log('Hello, ' + who);
  }

  const sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred('John');
}
// example6_11_3();

function example6_11_4() {
  function defer(f, ms) {
    return function(...args) {
      const ctx = this;
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    }
  }

  function sayHi(who) {
    console.log('Hello, ' + who);
  }

  const sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred('Pete');
}
// example6_11_4();

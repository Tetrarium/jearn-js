"use strict"
console.log("Chapter 9.7");

const example9_7_1 = () => {
  const sayHiMixin = {
    sayHi() {
      console.log(`Hello, ${this.name}`);
    },
    sayBy() {
      console.log(`Bye, ${this.name}`);
    },
  };

  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class User extends Person {
    constructor(name) {
      super(name);
    }
  }

  Object.assign(User.prototype, sayHiMixin);

  const vasya = new User('Vasya');

  vasya.sayHi();
  vasya.sayBy();
}
// example9_7_1();


const example9_7_2 = () => {
  function Person(name) {
    this.name = name;
  }

  const sayHiMixin = {
    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
  }

  Object.assign(Person.prototype, sayHiMixin);

  class User extends Person {
    constructor(name, isAdmin) {
      super(name);
      this.isAdmin = isAdmin;
    }
  }

  const vasya = new User('Vasya', true);
  console.log(vasya);
  vasya.sayHi();
}
// example9_7_2();


const example9_7_3 = () => {
  const sayMixin = {
    say(phrase) {
      console.log(phrase);
    }
  };

  const sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
      super.say(`Hello, ${this.name}`);
    },

    sayBy() {
      super.say(`Bye, ${this.name}`);
    }
  };

  class User {
    constructor(name) {
      this.name = name;
    }
  }

  Object.assign(User.prototype, sayHiMixin);

  const vasya = new User('Vasya');
  vasya.sayHi();
  vasya.sayBy();
}
// example9_7_3();


const example9_7_4 = () => {
  const eventMixin = {
    on(eventName, handler) {
      if (!this._eventHandlers) {
        this._eventHandlers = {};
      }
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }

      this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler) {
      let handlers = this._eventHandlers?.[eventName];

      if (!handlers) {
        return;
      }

      for (let i = 0; i < hendlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },

    trigger(eventName, ...args) {
      if (!this._eventHandlers?.[eventName]) {
        return
      }

      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
  }

  class Menu {
    choose(value) {
      this.trigger("select", value);
    }
  }

  Object.assign(Menu.prototype, eventMixin);

  const menu = new Menu();

  menu.on("select", value => console.log(`Выбранное значение: ${value}`));

  menu.choose('123');
}
example9_7_4();

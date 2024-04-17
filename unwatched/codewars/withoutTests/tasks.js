/**
 * Building blocks
 * 
 * https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript
 */

class Block {

  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    const { width, length, height } = this;
    return width * length * height;
  }

  getSurfaceArea() {
    const { width, length, height } = this;
    return (width * length + width * height + length * height) * 2;
  }
}


/**
 * Thinkful - Object Drills: Quarks
 * https://www.codewars.com/kata/5882b052bdeafec15e0000e6
 */

class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(q) {
    [this.color, q.color] = [q.color, this.color];
  }
}


/**
 * Re-open class
 * 
 * https://www.codewars.com/kata/53d628de83db278fb1000710
 */

String.prototype.myNewMethod = function () {
  return this.replace(/[a-z]/g, ch => String.fromCharCode(ch.charCodeAt() - 32));
};


/**
 * Double value every next call
 * 
 * https://www.codewars.com/kata/632408defa1507004aa4f2b5/train/javascript
 */

class Class {
  static number = 1;

  static getNumber() {
    const num = Class.number;
    Class.number *= 2;
    return num;
  }
}



/**
 * Capitalize first letter of a string
 * 
 * https://www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript
 */

String.prototype.capitalize = function () {
  return this.replace(/^[a-z]/, ch => String.fromCharCode(ch.charCodeAt() - 32));
};


/**
 * What a "Classy" Song
 * 
 * https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
 */

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;

    this.listeners = new Set();
  }

  howMany(listeners) {
    const lastCount = this.listeners.size;

    listeners.forEach(listener => {
      this.listeners.add(
        listener.toLowerCase(),
      );
    });

    console.log(this.listeners);
    return this.listeners.size - lastCount;
  }
}


/**
 * Make Class
 * 
 * https://www.codewars.com/kata/5d774cfde98179002a7cb3c8/train/javascript
 */

function makeClass(...properties) {
  console.log(properties);
  return function (...args) {
    for (let i = 0; i < properties.length; i++) {
      this[properties[i]] = args[i];
    }
  };
}


/**
 * JavaScript class-like objects
 * 
 * https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
 */

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

/**
 * Javascript Namespacing
 * 
 * https://www.codewars.com/kata/524c6a2e55025e3fba00020f/train/javascript
 */

MyNamespace.MyClass = class {
  constructor(phrase) {
    this.phrase = phrase;
  }

  sayHello() {
    return this.phrase;
  }
};


/**
 * SantaClausable Interface
 * 
 * https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
 */

function isSantaClausable(obj) {
  const methods = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];

  return methods.every(method => typeof obj[method] === 'function');
}


/**
 * Honey to the Bee
 * 
 * https://www.codewars.com/kata/52437f32636a67edb00002f7/train/javascript
 */

function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
  console.log(this.hive);
}

function Hive() {
  this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function (pollen) {
  this.pollen += pollen;
};

Hive.prototype.getPollen = function () {
  return this.pollen;
};

Bee.prototype.unloadPollen = function () {
  this.hive.addPollen(this.capacity); // добавлен this
};


/**
 * Number-like counter
 * 
 * https://www.codewars.com/kata/5313b713bb244a0eb20001fe/train/javascript
 */

function Counter() {
  this.count = 0;

  this.valueOf = function () {
    return this.count;
  };
}

Counter.prototype.incr = function () {
  this.count += 1;
};


/**
 * Singleton Pattern
 * 
 * https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript
 */

let obj;
var Singleton = function () {
  // implement singleton Class
  if (!obj) {
    obj = this;
  }

  return obj;
};


/**
 * Fix my method
 * 
 * https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript
 */

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function () {
      return myObject.objProperty;
    }
  };

  return myObject;
}

/**
 * Super Class Extensions
 * 
 * https://www.codewars.com/kata/55a14cd026f2a4b196000092/train/javascript
 */

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + ' makes a noise, ';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return super.speak() + this.name + ' goes meow.';
  }
}

/**
 * Create the base - Dungeon crawler #1
 * 
 * https://www.codewars.com/kata/55f74a7433feba03680000c5/train/javascript
 */

class Game {
  constructor(name, level = 0) {
    this.player = new Player(name);
    this.level = +level || 0;
    this.floors = [];
  }
}

class Player {
  constructor(name) {
    this.name = typeof name === 'string' && name.length > 0
      ? name
      : 'Player';

    this.health = 100;
    this.position = {
      x: 0,
      y: 0,
    };

    this.damage = 10;
    this.luck = 1;
  }
}

class Monster {
  constructor(level) {
    this.level = level;
  }
}

class Map {
  constructor(level) {
    this.level = level;
  }
}


/**
 * Doggy Daycare
 * 
 * https://www.codewars.com/kata/56951add53eccacf44000030/train/javascript
 */

class Dog {
  constructor(name, age, breed, vaccinated, wormed) {
    this.name = name;
    this.age = age;
    this.brees = breed;
    this.vaccinated = vaccinated;
    this.wormed = wormed;
  }

  checkDog() {
    if (this.vaccinated && this.wormed) {
      return `${this.name} can be accepted`;
    }

    if (this.vaccinated || this.wormed) {
      return `${this.name} can only be accepted by itself`;
    }

    return `${this.name} can not be accepted`;
  }
}


/**
 * Sorting Arrays ... wait, what?!
 * 
 * https://www.codewars.com/kata/56bac4c34537cf1e270005a1/train/javascript
 */


function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);

  return merge(
    mergeSort(left),
    mergeSort(array),
  );
}

Array.prototype.mySort = function () {
  const arr = [...this];
  return mergeSort(arr);
};


/**
 * Math Object Madness
 * 
 * https://www.codewars.com/kata/56bc0fc65bdaeb46d800084a/train/javascript
 */

// Fix the methods here

// Example (see Description for full list of Math methods to fix)
Math.ceil = function (x) {
  const remainder = x % 1;
  return remainder === 0 ? x : x - remainder + 1;
};

Math.floor = function (x) {
  return x - (x % 1);
};

Math.round = function (x) {
  const remainder = x % 1;
  const entire = x - remainder;
  return remainder < 0.5 ? entire : entire + 1;
};

Math.abs = function (x) {
  return x < 0 ? -x : x;
};

Math.max = function (...args) {
  let max = args[0];

  for (let i = 1; i < args.length; i++) {
    max = args[i] > max ? args[i] : max;
  }
  return max;
};

Math.min = function (...args) {
  let min = args[0];

  for (let i = 1; i < args.length; i++) {
    min = args[i] < min ? args[i] : min;
  }

  return min;
};

Math.pow = function (x, y) {
  return x ** y;
};


/**
 * Statistics - Fundamentals
 * 
 * https://www.codewars.com/kata/56c31c6ec44a3ab033000eaf/train/javascript
 */

class DataSet {
  constructor(...data) {
    this.data = data;
    this.mean = 0;
    this.variance = 0;
    this.stdDeviation = 0;

    this.setMean();
    this.setVar();
  }

  setMean() {
    this.mean = this.data.reduce((acc, x) => acc + x, 0) / this.data.length;
    return this.mean;
  }

  setVar() {
    this.variance = this.data.reduce((acc, x) => acc + Math.pow(x - this.mean, 2), 0) / this.data.length;
    this.stdDeviation = Math.sqrt(this.variance);
    return this.variance;
  }
}

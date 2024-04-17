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

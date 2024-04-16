/**
 * Thinkful - Object Drills: Vectors
 * https://www.codewars.com/kata/587f1e1f39d444cee6000ad4/train/javascript
 */

export default class Vector {
  constructor(x, y) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  add(v) {
    if (!v) {
      throw new Error('Error! Требутся аргумент Vector');
    }

    if (!(v instanceof Vector)) {
      throw new Error('Error! Аргумент не Vector');
    }

    // this.x += v.x;
    // this.y += v.y;

    return new Vector(
      this.x + v.x,
      this.y + v.y,
    );
  }

  getLength() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
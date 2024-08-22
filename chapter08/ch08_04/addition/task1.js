function Test() {
  this.test = 123;
}

function Test2() {
  Test.call(this);
}

Test2.prototype.__proto__ = Test.prototype;

console.log(new Test2().test);

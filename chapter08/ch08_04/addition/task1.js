function Test() {
  this.test = 123;
}

function Test2() {
  this.test = 456;
  // Test.call(this);
}

Test2.prototype.__proto__ = new Test();

console.log(new Test2().test);



Function.prototype.myCall = function (ctx, ...args) {
  // const foo = this;

  const myFoo = Symbol('foo');

  ctx[myFoo] = this;

  const res = ctx[myFoo](...args);

  delete ctx[myFoo];
  return res;
}

function Test3() {
  Test.myCall(this);
}

Test3.prototype.__proto__ = Test.prototype;

console.log(new Test3().test);
console.log((new Test3).__proto__ );
console.dir(new Test3());




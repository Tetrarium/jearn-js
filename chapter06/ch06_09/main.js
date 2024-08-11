console.log('Chapter 6.9');

function example6_9_1() {
  function slow(x) {
    console.log(`Called with ${x}`);
    return x;
  }


  function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      const result = func(x);

      cache.set(x, result);

      return result;
    }
  }

  slow = cachingDecorator(slow);

  console.log(slow(1));
  console.log(slow(1));

  console.log(slow(2));
  console.log(slow(2));

  console.log(slow('test'));
  console.log(slow('test'));
}
// example6_9_1();


function example6_9_2() {
  const worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log(`Called with ${x}`);

      return x * this.someMethod();
    }
  }

  function cachingDecorator(func) {
    const cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      const result = func.call(this, x);
      cache.set(x, result);
      return result;
    }
  }

  console.log(worker.slow(1));
  console.log(worker.slow(1));

  worker.slow = cachingDecorator(worker.slow);

  console.log(worker.slow(2));
  console.log(worker.slow(2));
}
// example6_9_2();


function example6_9_3() {
  function sayHi() {
    console.log(this.name);
  }

  const user = { name: 'John' };
  const admin = { name: 'Admin' };

  sayHi.call(user);
  sayHi.call(admin);
}
// example6_9_3();


function example6_9_4() {
  function say(phrase) {
    console.log(`${this.name}: ${phrase}`);
  }

  const user = { name: 'John' };

  say.call(user, 'Hello');
}
// example6_9_4();


function example6_9_5() {
  const worker = {
    slow(min, max) {
      return min + max;
    }
  }

  function cachingDecorator(func, hash) {
    const cache = new Map();

    return function() {
      const key = hash(arguments)
      if (cache.has(key)) {
        return cache.get(key);
      }

      const result = func.apply(this, arguments);
      cache.set(key, result);
      return result;
    }
  }

  function hash() {
    return [].join.call(arguments);
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(2, 5));
}
// example6_9_5();


// Addition examples
// Method myCall;
function example6_9_6() {
  console.log('myCall');

  Function.prototype.myCall = function(ctx, ...args) {
    if (!ctx) {
      return this(...args);
    }

    const thisArg = {
      ...ctx,
      [this.name]: this
    }

    return thisArg[this.name](...args);
  }

  const worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log(`Called with ${x}`);
      return x * this.someMethod();
    }
  }

  function cachingDecorator(func) {
    const cache = new Map();

    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      const result = func.myCall(this, x);
      cache.set(x, result);
      return result;
    }
  }

  console.log( worker.slow(1) );

  worker.slow = cachingDecorator(worker.slow);
  console.log( worker.slow(2) );
  console.log( worker.slow(2) );
  console.log( worker.slow(3) );

  console.log.myCall(null, 2, 3);
  console.log.myCall({}, 4, 5);
}
example6_9_6();
"use strict"
console.log("Chapter 10.1");

const example10_1_1 = () => {
  try {
    console.log('start try');

    lalal

    console.log('end try');
  } catch(err) {
    console.log('start catch');

    console.log('err: ' + err);
    
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    // lalal

    console.log('end catch');
  } try {
    console.log('start try 2');

    console.log('end try 2');
  } catch(err) {
    console.log('start catch 2');

    console.log('end catch 2');
  }
}
// example10_1_1();


const example10_1_2 = () => {
  const json = '{"name":"John", "age": 30}';
  const user = JSON.parse(json);

  console.log(user);
}
// example10_1_2();


const example10_1_3 = () => {
  const json = "{ uncorrect json }";

  try {
    const user = JSON.parse(json)
    console.log(user);
  } catch(err) {
    console.log(err);
    console.log('catch');
  }
}
// example10_1_3();

const example10_1_4 = () => {
  const json = '{ "age": 30 }'

  try {
    const user = JSON.parse(json);

    if (!user.name) {
      throw new SyntaxError('name не определен');
    }

    console.log(user.name);
  } catch (err) {
    console.log(err);
  }
}
// example10_1_4();


const example10_1_5 = () => {
  function readData() {
    const json = '{  "age": 30 }';

    try {
      blabla();
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  try {
    readData();
  } catch (e) {
    console.log("Внешний catch поймал: " + e);
  }
}
// example10_1_5();


const example10_1_6 = () => {
  try {
    asdf
    console.log('try');
  } catch (e) {
    console.log(e);
    console.log('catch');
    qwert
    console.log('catch after error');
  } finally {
    console.log('finally');
  }
}
// example10_1_6();


const example10_1_7 = () => {
  const num = +prompt("Введите попложительное целое число", 35);

  let diff, result;

  function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
      throw new Error("Долдно быть целое натуральное число");
    }

    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

  const cachedFib = (n) => {
    const cache = new Map;

    if (n < 0 || Math.trunc(n) != n) {
      throw new Error("Должно быть целое натуральное число");
    }

    function fib(n) {
      if (cache.has(n)) {
        return cache.get(n);
      }

      const result = n <= 1 ? n : fib(n - 1) + fib(n - 2);
      cache.set(n, result);
      return result;
    }

    return fib(n);
  }

  const start = Date.now();

  try {
    result = cachedFib(num);
  } catch(err) {
    result = 0;
  } finally {
    diff = Date.now() - start;
  }

  console.log(result || "Возникла ошибка");
  console.log(`Выполнение заняло ${diff}ms`);
  // С обычным fib долго.
  // С кэшированным бысторо, но на 10000 ошибка по стеку
}
// example10_1_7();


const example10_1_8 = () => {
  function foo() {
    try {
      console.log('try')

      throw new Error('slomal');

      return 1;
    } catch(e) {
      console.log(e);
      return e;

      console.log('not execution')
    } finally {
      console.log('finally');
      return 'f';
    }
  }

  console.log(foo());
}
// example10_1_8();


const example10_1_9 = () => {
  window.onerror = function(message, url, line, col, error, ...rest) {
    console.log(message);
    console.log(url);
    console.log(line);
    console.log(col);
    console.log(error);
    console.log(rest);
  }

  ssd
}
// example10_1_9();

const example10_1_10 = () => {
  try {
    throw new Error('error');
  } finally {
    console.log('working!');
  }

  console.log('without catch not executiong');
}
// example10_1_10();

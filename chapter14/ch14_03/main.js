console.log('Chapter 14.3');

const example14_3_1 = () => {
  function curry(f) {
    return function(a) {
      return function(b) {
        return f(a, b);
      }
    }
  }

  function sum(a, b) {
    return a + b;
  }

  const curriedSum = curry(sum);

  console.log(curriedSum(2)(3));
}
// example14_3_1();

const example14_3_2 = () => {
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      }

      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }

  function sum(a, b, c) {
    return a + b + c;
  }

  const curriedSum = curry(sum);

  console.log( curriedSum(1, 2, 3) );
  console.log( curriedSum(1, 2)(3) );
  console.log( curriedSum(1)(2, 3) );
  console.log( curriedSum(1)(2)(3) );
  console.log( curriedSum()()(1)(2)(3) );
}
// example14_3_2();

/** Задачи от chatGPT */
const task1 = () => {
  // Написать функцию sum, которая поддерживает каррированный вызов:
  function sum(a) {
    return function(b) {
      if (b === undefined) {
        return a;
      }
      return sum(a + b);
    }
  }
  
  console.log(sum(1)(2)(3)()); // Должно вывести 6
  console.log(sum(1)(2)());
}
// task1();

const task2 = () => {
  // Умножение с каррированием
  // Реализуйте функцию multiply, которая поддерживает вызовы в каррированном виде:

  function multiply(a) {
    return function(b) {
      if (b === undefined) {
        return a;
      }

      return multiply(a * b);
    }
  }

  console.log(multiply(2)(3)(4)()); // Должно вывести 24
}
// task2();

const task3 = () => {
  // Каррирование с несколькими аргументами
  // Реализуйте функцию sum, которая принимает два аргумента, но поддерживает как обычный вызов, так и каррированный:

  function sum(a, b) {
    if (b === undefined) {
      return function(b) {
        return a + b;
      }
    }
    return a + b;
  }

  console.log(sum(2, 3)); // Должно вывести 5
  console.log(sum(2)(3)); // Должно вывести 5
}
// task3();


const task4 = () => {
  // Каррирование произвольной функции
  // Напишите функцию curry, которая преобразует любую функцию в каррированную. Например:

  function curry(fn) {
    return function curried(...args) {
      if (args.length === fn.length) {
        return fn.apply(this, args);
      }

      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }

  function add(a, b, c) {
    return a + b + c;
  }
  const curriedAdd = curry(add);

  console.log(curriedAdd(1)(2)(3)); // Должно вывести 6
  console.log(curriedAdd(1, 2)(3)); // Должно вывести 6
  console.log(curriedAdd(1)(2, 3)); // Должно вывести 6
}
// task4();

const task5 = () => {
  // Генератор каррированных функций
  // Реализуйте функцию curryFunction, которая принимает функцию и её аргументы, и возвращает каррированную версию:

  function curryFunction(fn) {
    return function curried(arg) {
      if (fn.length === 1) return fn(arg);
      
      const newFn = fn.bind(null, arg);
      return curryFunction(newFn);
    }
  }

  function subtract(a, b, c) {
    return a - b - c;
  }

  const curriedSubtract = curryFunction(subtract);

  console.log(curriedSubtract(10)(3)(2)); // Должно вывести 5
  console.log(curriedSubtract(9)(2)(1)); // 6

  console.log(curriedSubtract(9)(2)(1)); // 0
  const partFn = curriedSubtract(9);
  console.log(partFn(9)(1)) // -1
}
task5();


const task6 = () => {
  // Каррирование с сохранением промежуточных значений
  // Реализуйте функцию chain, которая принимает начальное значение и поддерживает каррированный вызов операций. Например:

  // Я не понял как эта задача относится к каррированию, если это банальный чейнинг
  // Но чатик распорядился по своему :))

  function chain(initialValue) {
    let result = initialValue;
    return {
      add(v) {
        result += v;
        return this;
      },
      subtract(v) {
        result -= v
        return this;
      },
      multiply(v) {
        result *= v
        return this;
      },
      value() {
        return result;
      }
    }
  }

  const result = chain(5)
    .add(3)
    .subtract(2)
    .multiply(4)
    .value();

  console.log(result); // Должно вывести 24
}
// task6();


const task7 = () => {
  // Каррирование для сложных выражений
  // Создайте каррированную функцию calculate, которая принимает:
  // - Первым аргументом оператор (+, -, *, /),
  // - Затем числа, и выполняет указанную операцию.

  function calculate(operator) {
    return function carried(a) {
      if (a === undefined) return 0;

      return function(b) {
        if (b === undefined) {
          return a;
        }

        return carried(eval([a, b].join(operator)));
      }
    }
  }

  const add = calculate('+');
  console.log(add(5)(10)()); // Должно вывести 15

  const multiply = calculate('*');
  console.log(multiply(2)(3)(4)()); // Должно вывести 24

  const subtract = calculate('-');
  console.log(subtract(100)(20)(30)(10)()); // 40

  const divide = calculate('/');
  console.log(divide(100)(2)(5)()); // 10

  console.log(divide());
}
// task7();

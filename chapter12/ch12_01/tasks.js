const task12_1_1 = () => {
  // 1. Псевдослучайный генератор
  // https://learn.javascript.ru/task/pseudo-random-generator

  function* pseudoRandom(seed) {
    let previous = seed;

    while(true) {
      previous = previous * 16807 % 2147483647;

      yield previous;
    }
  }

  const generator = pseudoRandom(1);
  const pseudoRandomSequence = [];

  for (let i = 0; i < 100; i++) {
    pseudoRandomSequence.push(generator.next().value);
  }

  console.log(pseudoRandomSequence);
}
// task12_1_1();


// Задачи от ChatGPT
const task12_1_2 = () => {
  // Простая последовательность чисел
  // Напишите генератор, который будет генерировать последовательность чисел от 1 до 10.

  function* sequenceNumberGenerator() {
    for (let i = 1; i <= 10; i++) {
      yield i;
    }
  }

  const generator = sequenceNumberGenerator();

  console.log(...generator);
}
// task12_1_2();


const task12_1_3 = () => {
  // Бесконечная последовательность
  // Создайте генератор, который будет генерировать бесконечную последовательность чисел, начиная с 1

  function* infinityNumberGen() {
    let val = 1;

    while (true) {
      yield val++
    }
  }

  const result = [];

  const gen = infinityNumberGen();

  for (let i = 0; i < 100; i++) {
    result.push(gen.next().value);
  }
  console.log(result);
};
// task12_1_3();


const task12_1_4 = () => {
  // 3. Числа Фибоначчи
  // Напишите генератор, который будет генерировать числа Фибоначчи.

  function* fibGen() {
    let prev = 0;
    let current = 1;

    while(true) {
      yield current;
      const next = prev + current;
      [prev, current] = [current, next];
    }
  }

  const fibs = fibGen();

  const res = [];

  const timestamp = performance.now();

  for (let i = 0; i < 1480; i++) {
    res.push(fibs.next().value);
  }

  console.log(res);
  console.log(performance.now() - timestamp);
}
// task12_1_4();


const task12_1_5 = () => {
  // 4. Чётные числа
  // Создайте генератор, который будет генерировать только чётные числа, начиная с 2.

  function* evenGen() {
    let val = 0;

    while(true) {
      val += 2;
      yield val;
    }    
  }

  const res = [];

  const evenNums = evenGen();

  for (let i = 0; i < 100; i++) {
    res.push(evenNums.next().value);
  }

  console.log(res);
};
// task12_1_5();


const task12_1_6 = () => {
  // 5. Произвольная последовательность
  // Напишите генератор, который будет принимать массив и возвращать его элементы по одному за раз.

  /**
   * 
   * @param {Array} arr 
   */
  function* arbitrarySequence(arr) {
    for (let i = 0; i < arr.length; i++) {
      yield arr[i];
    }
  }

  const sequence = arbitrarySequence([1, 5, 7, 2, 9, 4, 0]);

  for (elem of sequence) {
    console.log(elem);
  }
  console.log(sequence);
};
// task12_1_6();


const task12_1_7 = () => {
  // 6. Генератор диапазона
  // Создайте генератор, который будет принимать два аргумента (начало и конец диапазона) и генерировать числа в этом диапазоне

  function* rangeSequenceGenerator(from, to) {
    for (let i = from; i <= to; i++) {
      yield i;
    }
  }

  const sequence = rangeSequenceGenerator(5, 10);

  console.log(...sequence);
};
// task12_1_7();


const task12_1_8 = () => {
  // 7. Генератор строк
  // Напишите генератор, который будет принимать строку и возвращать её символы по одному за раз.

  /**
   * 
   * @param {String} str 
   */
  function* getSymFromStrGen(str) {
    for (let i = 0; i < str.length; i++) {
      yield str[i];
    }
  }

  const charSequence = getSymFromStrGen('Hello, World!');

  console.log([...charSequence]);
}
// task12_1_8();


const task12_1_9 = () => {
  // 8. Генератор факториалов
  // Создайте генератор, который будет генерировать последовательность факториалов чисел (1!, 2!, 3!, ...).

  function* factorialsGen() {
    let res = 1;
    let i = 1;

    while (true) {
      res = res * i;
      i++;
      yield res;
    }
  }

  const factorials = factorialsGen();

  const res = [];

  for (let i = 0; i < 100; i++) {
    res.push(factorials.next().value);
  }

  console.log(res);
};
// task12_1_9();


const task12_1_10 = () => {
  // 9. Генератор случайных чисел
  // Напишите генератор, который будет генерировать случайные числа в заданном диапазоне.

  function* randomNumbersSequenceGen(from, to) {
    while (true) {
      yield Math.floor(Math.random() * (to + 1 - from) + from);
    }
  }

  const res = []

  const randomNumbersSequence = randomNumbersSequenceGen(5, 10);

  for (let i = 0; i < 1000000; i++) {
    res.push(randomNumbersSequence.next().value);
  }

  console.log(res);

  const qualities = {}

  for (const val of res) {
    if (qualities[val]) {
      qualities[val]++
    } else {
      qualities[val] = 1;
    }
  };

  console.log(qualities);
};
// task12_1_10();


const task12_1_11 = () => {

  function isSimple(n) {
    const max = Math.sqrt(n);

    for (let i = 2; i <= max; i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  function* simpleNumberGen() {
    let next = 1;

    while (true) {
      yield next;

      while(true) {
        next += 1;

        if (isSimple(next)) {
          break;
        }
      }
    }
  }

  const simpleNumbers = simpleNumberGen();

  const res = [];

  const timestamp = performance.now();

  for (let i = 0; i < 100000; i++) {
    res.push(simpleNumbers.next().value);
  }

  console.log(res);
  console.log(performance.now() - timestamp);
};
task12_1_11();

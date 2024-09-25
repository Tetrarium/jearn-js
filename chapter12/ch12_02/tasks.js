// Задачи от ChatGPT

const task12_2_1 = () => {
  // 1. Асинхронный генератор чисел
  // Напишите асинхронный генератор, который будет генерировать последовательность чисел от 1 до 10 с задержкой в 1 секунду между числами.

  async function* generateNumberSequence() {
    for (let i = 1; i <= 10; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield i;
    }
  }

  (async () => {
    for await (const num of generateNumberSequence()) {
      console.log(num);
    }
  })();
};
// task12_2_1();


const task12_2_2 = () => {
  // 2. Асинхронный генератор случайных чисел
  // Создайте асинхронный генератор, который будет генерировать случайные числа в заданном диапазоне с задержкой в 500 миллисекунд между числами.

  async function* generateRandomNumbers(from, to) {
    while(true) {
      await new Promise(resolve => setTimeout(resolve, 500));

      yield Math.floor(Math.random() * (to + 1 - from) + from);
    }
  }

  (async () => {
    let count = 1;

    for await(const value of generateRandomNumbers(-100, 100)) {
      console.log(value);

      if (++count > 20) {
        console.log('Stop: ' + count);
        break
      };
    }
  })()
};
// task12_2_2();


const task12_2_3 = () => {
  // Асинхронный генератор строк
  // Напишите асинхронный генератор, который будет принимать строку и возвращать её символы по одному за раз с задержкой в 300 миллисекунд между символами.

  async function* generateChars(str) {
    for (const char of str) {
      await new Promise(resolve => setTimeout(resolve, 300));

      yield char;
    }
  }

  (async () => {
    for await (const char of generateChars('Hello, World!')) {
      console.log(char);
    }
  })();
}
// task12_2_3();


const task12_2_4 = () => {
  // 4. Асинхронный генератор данных из API
  // Создайте асинхронный генератор, который будет запрашивать данные из API  и возвращать их по одному объекту за раз.

  async function* generateData(url) {
    let id = 1;

    while (true) {
      const data = await fetch(`${url}/${id}`)
        .then(response => response.json())
      
      yield data;
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      id++;
    }
  }

  (async () => {
    let count = 1;

    for await (const data of generateData('https://jsonplaceholder.typicode.com/posts')) {
      console.log(data);

      if (count++ > 10) {
        break;
      }
    }
  })();
};
// task12_2_4();


const task12_2_5 = () => {
  // 5. Асинхронный генератор чисел Фибоначчи
  // Напишите асинхронный генератор, который будет генерировать числа Фибоначчи  с задержкой в 1 секунду между числами.

  async function* fibGenerator() {
    let prev = 0;
    let current = 1;

    while (true) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield current;

      [prev, current] = [current, current + prev];
    }
  }

  (async () => {
    let count = 1;

    for await (const fibNum of fibGenerator()) {
      console.log(fibNum);

      if (count++ > 100) {
        break;
      }
    }
  })();
};
// task12_2_5();


const task12_2_6 = () => {
  // 6. Асинхронный генератор диапазона
  // Создайте асинхронный генератор, который будет принимать два аргумента (начало и конец диапазона)
  // и генерировать числа в этом диапазоне с задержкой в 500 миллисекунд между числами.

  async function* generateNumbers(from, to) {
    for (let i = from; i <= to; i++) {
      yield i;

      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  (async () => {
    for await (const num of generateNumbers(5, 10)) {
      console.log(num);
    }
  })();
};
// task12_2_6();


const task12_2_7 = () => {
  // 7. Асинхронный генератор чтения файла
  // Напишите асинхронный генератор, который будет читать файл построчно
  // и возвращать строки с задержкой в 200 миллисекунд между строками.

  /**
   * 
   * @param {String} path 
   */
  async function* generateDataFromFile(path) {
    const data = await fetch(path)
      .then(response => response.text());
      
    const strings = data.split('\n');

    for (const string of strings) {
      yield string;

      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  (async () => {
    for await (const str of generateDataFromFile('./file.txt')) {
      console.log(str);
    }
  })();
}
task12_2_7();

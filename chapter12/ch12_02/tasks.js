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
task12_2_2();

// 1. Вывод каждую секунду
// https://learn.javascript.ru/settimeout-setinterval#vyvod-kazhduyu-sekundu

function printNumbersWithInterval(from, to) {
  const DELAY = 1000;
  let current = from;

  let timerId = setInterval(() => {
    console.log(current++)

    if (current > to) {
      clearInterval(timerId);
    }
  }, DELAY);
}

// printNumbersWithInterval(5, 10);

function printNumbersWithTimeout(from, to) {
  const DELAY = 1000;
  let current = from;

  let timerId = setTimeout(function tick() {
    console.log(current++);

    if (current > to) {
      clearTimeout(timerId);
    } else {
      timerId = setTimeout(tick, DELAY);
    }
  }, DELAY)
}

// printNumbersWithTimeout(6, 15);
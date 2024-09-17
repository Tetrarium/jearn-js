"use strict"
console.log("Chapter 11.7");

const example11_7_1 = () => {
  const promise = Promise.resolve();

  promise.then(() => console.log('promise executed'));

  console.log('code executed');
}
// example11_7_1();


const example11_7_2 = () => {
  Promise.resolve()
    .then(() => console.log("Promise executed"))
    .then(() => console.log('Code executed'));
};
// example11_7_2();


const example11_7_3 = () => {
  const promise = Promise.reject(new Error('Error in promise!'));
  promise.catch(err => console.log('поймана'));

  window.addEventListener('unhandledrejection', event => {
    console.log(event.reason);
  })
}
// example11_7_3();


const example11_7_4 = () => {
  const promise = Promise.reject(new Error("Error in promise"));

  setTimeout(() => promise.catch(err => console.log('catched!')), 1000);

  window.addEventListener('unhandledrejection', evt => console.log(event.reason));
}
// example11_7_4();



/** Событийный цикл */

const example11_7_5 = () => {
  let i = 0;

  const start = Date.now();

  function count() {
    for (let j = 0; j < 1e9; j++) {
      i++;
    }
  }

  count();

  console.log('Done in ' + (Date.now() - start) + 'ms');
}
// example11_7_5();


const example11_7_6 = () => {
  let i = 0;

  let start = Date.now();

  function count() {
    do {
      i++
    } while (i % 1e5 !== 0);

    if (i === 1e9) {
      console.log("Done in " + (Date.now() - start) + 'ms');
    } else {
      setTimeout(count);
    }
  }

  count();
}
// example11_7_6();


/** Задачи на EventLoop от chatGPT */

const task11_7_1 = () => {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 0);

  setTimeout(() => {
    console.log(3);
  }, 0);

  Promise.resolve().then(() => {
    console.log(4);
  });

  Promise.resolve().then(() => {
    console.log(5);
  });

  console.log(6);

  // Мое решение: 1 6 4 5 2 3
}
// task11_7_1();


const task11_7_2 = () => {
  console.log("Шаг 1");

  setTimeout(() => {
    console.log("Шаг 2");
  }, 1000);

  Promise.resolve().then(() => {
    console.log("Шаг 3");
  });

  setTimeout(() => {
    console.log("Шаг 4");
  }, 0);

  console.log("Шаг 5");

  // 1 5 3 4 2
}
// task11_7_2();


const task11_7_3 = () => {
  console.log(1); // 1) выводится 1

  setTimeout(() => { // 2) регистрируется макро 
    console.log(2); // 7) после того как синх и микро опустели выполняется макро. выводится 2
  }, 0);

  Promise.resolve() // 3) регистрируется микро 1
    .then(() => {
      console.log(3); // 4) выводится 3
      return Promise.resolve(); // 5) регистрируется микро
    })
    .then(() => {
      console.log(4); // 6) поскольку микро не пуста выводится 4
    });

  console.log(5); // 4) выводится 1
  // 1 5 3 4 2
}
// task11_7_3()


const task11_7_4 = () => {
  console.log("A");

  setTimeout(() => {
    console.log("B");
  }, 0);

  Promise.resolve().then(() => {
    console.log("C");
    setTimeout(() => {
      console.log("D");
    }, 0);
  });

  Promise.resolve().then(() => {
    console.log("E");
  });

  console.log("F");

  // A F С E B D 
}
// task11_7_4();


const task11_7_5 = () => {
  console.log(1);

  async function asyncFunc() {
    console.log(2);

    await new Promise(resolve => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    });

    console.log(4);
  }

  asyncFunc();

  setTimeout(() => {
    console.log(5);
  }, 500);

  console.log(6);

  // 1 2 6 5 3 4 
  // micro 
  // macro 
}
// task11_7_5();


const task11_7_6 = () => {
  console.log("Начало");

  function recursiveAsyncFunction(counter) {
    if (counter === 0) {
      return;
    }

    setTimeout(() => {
      console.log(`Таймер ${counter}`);
      recursiveAsyncFunction(counter - 1);
    }, 0);
  }

  recursiveAsyncFunction(3);

  Promise.resolve().then(() => {
    console.log("Промис 1");
  });

  console.log("Конец");

  // Начало Конец Промис1 Таймер3 Таймер2 Таймер1
  // micro 
  // macro
  // stack
}
// task11_7_6();


const task11_7_7 = () => {
  console.log("A");

  setImmediate(() => {
    console.log("B");
  });

  setTimeout(() => {
    console.log("C");
  }, 0);

  process.nextTick(() => {
    console.log("D");
  });

  Promise.resolve().then(() => {
    console.log("E");
  });

  console.log("F");

  // A F B D E C
  // A F D E C B - правильный вариант
  // nextTick
  // setImmediate
  // micro
  // macro 
}
// task11_7_7();


const task11_7_8 = () => {
  console.log("1");

  setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
      console.log("3");
    });

    console.log("4");
  }, 0);

  Promise.resolve().then(() => {
    console.log("5");
  });

  setTimeout(() => {
    console.log("6");

    Promise.resolve().then(() => {
      console.log("7");
    });

    console.log("8");
  }, 0);

  console.log("9");

  // 1 9 5 2 4 3 6 8 7
  // micro
  // macro 
}
// task11_7_8();


const task11_7_9 = () => {
  console.log("Начало");

  async function loopAsync() {
    for (let i = 0; i < 3; i++) {
      console.log(`Цикл ${i}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Таймер ${i}`);
    }
    console.log("Конец функции");
  }

  loopAsync();

  console.log("Конец основного потока");

  // Начало Цикл0 КонецОсновногоПотока Таймер0 Цикл1 Таймер1 Цикл2 Таймер2 КонецФункции
  // micro  
  // macro  
}
// task11_7_9();


const task11_7_10 = () => {
  console.log("Начало");

  Promise.resolve().then(() => {
    console.log("Промис 1");

    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Промис 2");
        resolve();
      }, 2000);
    });
  }).then(() => {
    console.log("Промис 3");
  });

  Promise.resolve().then(() => {
    console.log("Промис 4");

    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Промис 5");
        resolve();
      }, 1000);
    });
  }).then(() => {
    console.log("Промис 6");
  });

  console.log("Конец");

  // Начало Конец Промис1 Промис4 Промис5 Промис6 Промис2 Промис3
  // micro
  // macro
}
task11_7_10();

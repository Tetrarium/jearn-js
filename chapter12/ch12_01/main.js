console.log('Chapter 12.1');


const example12_1_1 = () => {
  function* generateSequence() {
    console.log('a');
    yield 1;
    console.log('b');
    yield 2;
    console.log('c');
    return 3;
  }

  const generator = generateSequence();

  console.log(generator);
  console.log(generator.next());

  console.log(generator.__proto__);

  // console.log(generator.return());
  console.log(generator.next());

  console.log(generator.next());
}
// example12_1_1();


const example12_1_2 = () => {
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }

  const generator = generateSequence();

  for (let val of generator) {
    console.log(val);
  }

  const sequence = [0, ...generateSequence()];
  console.log(sequence);
};
// example12_1_2();


const example12_1_3 = () => {
  const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,

        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      }
    }
  }

  console.log([...range]);
};
// example12_1_3();


const example12_1_4 = () => {
  const range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };

  console.log([...range]);
}
// example12_1_4();


const example12_1_5 = () => {
  function* generateRandomNums(count) {
    for (let i = 0; i < count; i++) {
      yield Math.random();
    }
  }

  const randomNums = [...generateRandomNums(10)]
  console.log(randomNums, randomNums.length);
}
// example12_1_5();


const example12_1_6 = () => {
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  function* generatePasswordCodes() {
    yield* generateSequence(48, 57);

    yield* generateSequence(65, 90);

    yield* generateSequence(97, 122);
  }

  let str = '';

  for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }

  console.log(str);
};
// example12_1_6();


const example12_1_7 = () => {
  function* gen() {
    const result = yield "2 + 2 = ?";

    console.log(result);
  }

  const generator = gen();

  const question = generator.next().value;
  console.log(question);

  setTimeout(() => generator.next(4), 2000);
}
// example12_1_7();


const example12_1_8 = () => {
  function* gen() {
    const ask1 = yield "2 + 2 = ?";

    console.log(ask1);

    const ask2 = yield "3 + 3 = ?";

    console.log(ask2);
  }

  const generator = gen();

  console.log( generator.next().value );
  console.log( generator.next(4).value );
  console.log( generator.next(9).done );
};
// example12_1_8();


const example12_1_9 = () => {
  function* gen() {
    try {
      const result = yield "2 + 2 = ?";

      console.log(result);
      console.log("Управление перешло сюда");
    } catch(e) {
      console.log(e);
    }
  }

  const generator = gen();
  const question = generator.next().value;
  console.log(question);

  console.log(generator.throw(new Error("Ответ не найден")));
}
// example12_1_9();


const example12_1_10 = () => {
  function* generate() {
    const result = yield "2 + 2 = ?";

    console.log(result);
  }

  const generator = generate();

  const question = generator.next().value;
  console.log(question);

  try {
    generator.throw(new Error("Ответ не найден"));
  } catch(e) {
    console.log(e);
  }
}
// example12_1_10();


const example12_1_11 = () => {
  console.log('wrong');
  function wrongGenerate() {
    yield (() => {});

    console.log('work');
    return 'something';
  }

  console.log(wrongGenerate());
}
// example12_1_11();

console.log('Chapter 5.6');

const example5_6_1 = () => {
  const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,
        next() {
          return this.current <= this.last
            ? { done: false, value: this.current++ }
            : { done: true };
        }
      };
    }
  };

  for (let num of range) {
    console.log(num);
  }

  for (let num of range) {
    console.log(num);
  }
};

// example5_6_1();

const example5_6_2 = () => {
  const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      return this.current <= this.to
        ? { done: false, value: this.current++ }
        : { done: true };
    },
  };

  for (let num of range) {
    console.log(num);
  }

  for (let num of range) {
    console.log(num);
  }

  console.log(range);
};
// example5_6_2();


const example5_6_3 = () => {
  function Range(from, to) {
    this[Symbol.iterator] = function () {
      return {
        current: from,
        last: to,

        next() {
          return this.current <= this.last
            ? { done: false, value: this.current++ }
            : { done: true };
        }
      };
    };
  }

  for (let num of new Range(2, 6)) {
    console.log(num);
  }

  for (let num of new Range(10, 20)) {
    console.log(num);
  }

};
// example5_6_3();


function example5_6_4() {
  console.log('example 5.6.4');
  for (let char of 'test') {
    console.log(char);
  }

  for (let char of '𝒳😂') {
    console.log(char);
  }
}
// example5_6_4();


function example5_6_5() {
  console.log('Явный вызов итератора');

  const str = 'Hello';
  const iterator = str[Symbol.iterator]();
  console.log(iterator);

  while (true) {
    const result = iterator.next();
    if (result.done) break;
    console.log(result.value);
  }
}
// example5_6_5();

function example5_6_6() {
  console.log('Итерируемые объекты и псевдомассивы');

  const arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2,
  };

  // for (let item of arrayLike) {
  //   console.log(item);
  // }

  for (let key in arrayLike) {
    console.log(key);
  }
}
// example5_6_6();


function example5_6_7() {
  console.log('Array.from');

  const arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 4,
  };

  const arr = Array.from(arrayLike);
  console.log(arr);

  const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,

        next() {
          return this.current <= this.last
            ? { done: false, value: this.current++ }
            : { done: true };
        }
      };
    }
  };

  console.log(Array.from(range));
  console.log(Array.from(range, (num) => num * num));
  console.log(Array.from('𝒳😂'));
  console.log(Array.from('𝒳😂', char => char.charCodeAt()));
  console.log('𝒳😂'.split());

  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }

  console.log(slice('𝒳😂𩷶', 1, 3));
}
example5_6_7();

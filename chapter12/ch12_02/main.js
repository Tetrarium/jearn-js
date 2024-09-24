console.log('Chapter 12.2');

const example12_2_1 = () => {
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
      };
    }
  };

  for (let value of range) {
    console.log(value);
  }

  console.log([ ...range ]);
}
// example12_2_1();


const example12_2_2 = () => {
  const range = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator]() {
      return {
        current: this.from,
        last: this.to,

        async next() {
          await new Promise(resolve => setTimeout(resolve, 1000));

          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

  (async () => {
    for await (let value of range) {
      console.log(value);
    }
  })()
}
// example12_2_2();


const example12_2_3 = () => {
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
    }
  }

  for (let value of generateSequence(1, 5)) {
    console.log(value);
  }
}
// example12_2_3();


const example12_2_4 = () => {
  async function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield i;
    }
  }

  (async () => {
    const generator = generateSequence(1, 5);

    for await (const value of generator) {
      console.log(value);
    }
  })();
}
// example12_2_4();


const example12_2_5 = () => {
  const range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };

  for (let value of range) {
    console.log(value);
  }
}
// example12_2_5();


const example12_2_6 = () => {
  const range = {
    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() {
      for (let value = this.from; value <= this.to; value++) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield value;
      }
    }
  };

  (async () => {
    for await (const value of range) {
      console.log(value);
    }
  })();
}
// example12_2_6();


const example12_2_7 = () => {
  async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {
      const response = await fetch(url, {
        headers: {'User-Agent': 'Our script'},
      });

      const body = await response.json();

      let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
      nextPage = nextPage && nextPage[1];

      url = nextPage;

      for(let commit of body) {
        yield commit;
      }
    }
  }

  (async () => {
    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
      console.log(commit.author?.login);

      if (++count === 100) {
        break;
      }
    }
  })();
}
// example12_2_7();

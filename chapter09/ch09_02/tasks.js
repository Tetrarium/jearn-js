const task9_2_1 = () => {
  // 1. Ошибка создания экземпляра класса
  // https://learn.javascript.ru/class-inheritance
  console.log('task 1');
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      // this.name = name;
      this.created = new Date();
    }
  }

  const rabbit = new Rabbit("White Rabbit");
  console.log(rabbit);
}
task9_2_1();


const task9_2_2 = () => {
  console.log('Task 2');
  // 2. Улучшенные часы
  // https://learn.javascript.ru/class-inheritance#uluchshennye-chasy

  class Clock {
    constructor({template}) {
      this.template = template;
    }

    render() {
      const date = new Date();

      const [hours, mins, secs] = Intl.DateTimeFormat('ru-Ru', {
        timeStyle: 'medium',
      }).format(date).split(':');

      const output = this.template  
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      
      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  const clock = new Clock({ template: 'h:m:s' });
  clock.start();

  setTimeout(() => clock.stop(), 5000);

  class ExtendedClock extends Clock {
    constructor({ template, precision = 1000}) {
      super({ template });
      this.precision = precision;
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  }

  const extendedClock = new ExtendedClock({
    template: 'h > m > s',
    precision: 500,
  })

  setTimeout(() => extendedClock.start(), 6000);
  setTimeout(() => extendedClock.stop(), 11000);
}
task9_2_2();

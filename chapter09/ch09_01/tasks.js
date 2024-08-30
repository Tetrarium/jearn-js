function task9_1_1() {
  console.log('task 9.1.1');
  // Перепишите класс
  // https://learn.javascript.ru/class#perepishite-klass


  class Clock {
    timer;

    constructor({ template }) {
      this.template = template;
    }

    render() {
      const date = new Date();

      const [h, m, s] = Intl.DateTimeFormat('ru-RU', {
        timeStyle: 'medium'
      }).format(date).split(':');

      const output = this.template
        .replace('h', h)
        .replace('m', m)
        .replace('s', s)

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

  const clock = new Clock({template: 'h:m:s'});
  clock.start();

  setTimeout(() => clock.stop(), 10000);
}
task9_1_1();
const task10_2_1 = () => {
  class FormatError extends SyntaxError {
    constructor(msg) {
      super(msg);
      this.name = this.constructor.name;
    }
  }

  const err = new FormatError("Ошибка форматирования");

  console.log(err);
  console.log(err.message);
  console.log(err.name);
  console.log(err.stack);
}
task10_2_1();
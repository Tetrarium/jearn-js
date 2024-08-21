console.log('Tasks');

// 1. Добавить функциям метод "f.defer(ms)"
// https://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-metod-f-defer-ms
function task8_3_1() {
  Function.prototype.defer = function (ms) {
    setTimeout(() => {
      this();
    }, ms);
  };

  function f() {
    console.log('Hello');
  }

  f.defer(2000);
}
// task8_3_1();


// 2. Добавьте функциям декорирующий метод "defer()"
// https://learn.javascript.ru/native-prototypes#dobavte-funktsiyam-dekoriruyuschiy-metod-defer
function task8_3_2() {
  Function.prototype.defer = function(ms) {
    return (...args) => {
      setTimeout(() => {
        this(...args);
      }, ms)
    }
  }

  function f(a, b) {
    console.log(a + b);
  }

  f.defer(2000)(1, 2);
}
task8_3_2();
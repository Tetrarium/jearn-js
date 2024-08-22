function task8_4_1() {
  // 1. Добавьте toString в словарь
  // https://learn.javascript.ru/prototype-methods#dobavte-tostring-v-slovar

  let dictionary = Object.create(null);

  // ваш код, который добавляет метод dictionary.toString

  Object.defineProperty(dictionary, 'toString', {
    value() {
      return Object.keys(this).join(',');
    }
  });

  // добавляем немного данных
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

  // только apple и __proto__ выведены в цикле
  for (let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
  }

  // ваш метод toString в действии
  alert(dictionary); // "apple,__proto__"

}
// task8_4_1()


function task8_4_2() {
  // 2. Разница между вызовами
  // https://learn.javascript.ru/prototype-methods#raznitsa-mezhdu-vyzovami

  // Давайте создадим новый объект rabbit:
  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function () {
    alert(this.name);
  };

  let rabbit = new Rabbit("Rabbit");

  // Все эти вызовы делают одно и тоже или нет?
  rabbit.sayHi();  // this является rabbit, поэтому выведет строку Rabbit
  Rabbit.prototype.sayHi(); // this являестя объект Rabbit.prototype, у которого нет name -> undefined
  Object.getPrototypeOf(rabbit).sayHi(); // this === Rabbit.prototype -> undefined
  rabbit.__proto__.sayHi(); // this === Rabbit.prototype -> undefined
}

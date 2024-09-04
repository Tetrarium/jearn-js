const task9_3_1 = () => {
  console.log('Task 9.3.1');
  // 1. Класс расширяет объект?
  // https://learn.javascript.ru/static-properties-methods#klass-rasshiryaet-obekt

  class Rabbit extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  console.log( rabbit.hasOwnProperty('name') ); // Ошибка
}
task9_3_1();
const task9_6_1 = () => {
  console.log('Task 9.6.1');
  // Странный instanceof
  // https://learn.javascript.ru/instanceof#strannyy-instanceof

  // Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

  function A() { }
  function B() { }

  A.prototype = B.prototype = {};

  let a = new A();

  console.log(a instanceof B); // true

  // a.__proto__ === A.prototype и равно B.protottype;
  // оператор instanceof идет по цепочке прототипов и сравнивает с B.prototype
  // если сравнение true возвращает true, если дойда до конца сравнение не совпадает
  // то возвращает false
}
task9_6_1();
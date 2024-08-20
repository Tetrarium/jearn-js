function task8_2_1() {
  // 1. Изменяем "prototype"
  // https://learn.javascript.ru/function-prototype#izmenyaem-prototype

  // В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
  // Сначала у нас есть такой код:

  {
    function Rabbit() { }
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    alert(rabbit.eats); // true
  }

  // 1. Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
  {
    function Rabbit() { }
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype = {}; // <-

    alert(rabbit.eats); // ? undefined // ошибся, объект уже существует, true
  }

  // 2. …А если код такой (заменили одну строчку)?
  {
    function Rabbit() { }
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    Rabbit.prototype.eats = false; // <-

    alert(rabbit.eats); // ? false
  }

  // 3. Или такой (заменили одну строчку)?
  {
    function Rabbit() { }
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    delete rabbit.eats; // <-

    alert(rabbit.eats); // ? true
  }

  // 4. Или, наконец, такой:
  {
    function Rabbit() { }
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    delete Rabbit.prototype.eats; // <-

    alert(rabbit.eats); // ? undefined
  }
}


function task8_2_2() {
  // 2. Создайте новый объект с помощью уже существующего
  // https://learn.javascript.ru/function-prototype#sozdayte-novyy-obekt-s-pomoschyu-uzhe-suschestvuyuschego


  // Представьте, что у нас имеется некий объект obj,
  // созданный функцией-конструктором – мы не знаем какой именно,
  // но хотелось бы создать ещё один объект такого же типа.

  // Можем ли мы сделать так?
  // let obj2 = new obj.constructor();

  // Приведите пример функции-конструктора для объекта obj,
  // с которой такой вызов корректно сработает.
  // И пример функции-конструктора, с которой такой код поведёт себя неправильно.

  // Сработает
  function User(name) {
    this.name = name;
  }

  // Не сработает
  function Cat(name) {
    this.name = name
  }
  Cat.prototype = {
    walk: true,
  }
}

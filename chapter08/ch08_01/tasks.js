function task8_1_1() {
  // 1. Работа с прототипами
  // https://learn.javascript.ru/prototype-inheritance#rabota-s-prototipami

  // В приведённом ниже коде создаются и изменяются два объекта.
  // Какие значения показываются в процессе выполнения кода?

  let animal = {
    jumps: null
  };
  
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1) // true
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) // null
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) // undefined
}


function task8_1_2() {
  // Алгоритм поиска
  // https://learn.javascript.ru/prototype-inheritance#algoritm-poiska

  // Задача состоит из двух частей.
  // У нас есть объекты:

  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,

    __proto__: head,
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,

    __proto__: table,
  };
  
  let pockets = {
    money: 2000,

    __proto__: bed,
  };

  // 1. С помощью свойства __proto__ задайте прототипы так,
  // чтобы поиск любого свойства выполнялся по следующему пути:
  // pockets → bed → table → head.
  // Например, pockets.pen должно возвращать значение 3 (найденное в table),
  // а bed.glasses – значение 1 (найденное в head).

  // 2. Ответьте на вопрос:
  // как быстрее получить значение glasses – через pockets.glasses или через head.glasses?
  // При необходимости составьте цепочки поиска и сравните их.

  // через pockets.glasses ищется следующим образом pockets -> bed -> table -> head 
  // и из head возвращается значение 1
}


function task8_1_3() {
  // 3. Куда будет произведена запись?
  // https://learn.javascript.ru/prototype-inheritance#kuda-budet-proizvedena-zapis

  // Объект rabbit наследует от объекта animal.
  // Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

  let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

  // this получит объект, который будет перед точкой,
  // соответственно в rabbit появится свойство fill.
}


function task8_1_4() {
  // 4. Почему наедаются оба хомяка?
  // https://learn.javascript.ru/prototype-inheritance#pochemu-naedayutsya-oba-homyaka

  // У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
  // Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  alert( lazy.stomach ); // apple

  // Потому что метод eat ищет stomach сначала в собственных объектах
  // поскольку там его не находит ищет в прототипе.
  // находит его в прототипе, затем пушит в него данные.
  // для того, чтобы у объектов наследников был собственный stomach
  // нужно в каждый объект добавить stomach: []
  // либо в методе eat делать this.stomach = [...this.stomach, food]
}

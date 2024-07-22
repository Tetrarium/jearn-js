// 1. Учитывает ли функция последние изменения?
// https://learn.javascript.ru/closure#uchityvaet-li-funktsiya-poslednie-izmeneniya

{
  let name = "John";

  function sayHi() {
    alert("Hi, " + name);
  }

  name = "Pete";

  // sayHi(); // что будет показано: "John" или "Pete"?
  // Да, учитывает, поскольку ппеременная в глобальном окружении изменилась
  // а функция обращается к переменной уже после её изменения.
}


// 2. Какие переменные доступны?
// https://learn.javascript.ru/closure#kakie-peremennye-dostupny
{
  function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  // work(); // что будет показано?
  // Поскольку при вызове функции makeWorker создается внутреняя анонимная
  // функция, которая использует переменную name, данная переменная отсутствует
  // в этой вложенной функции, соответственно, вложенная функция сначала ищет эту
  // переменную на уровне выше, в makeWorker, которая имеет объявленную переменную
  // name. Соответсвенно, вложенная функция берет name из этого лексического окружения

  // Создание внешней переменной name никак не влияет на name в makeWorker
  // Результатом будет "Pete"
}


// 3. Независимы ли счётчики?
// https://learn.javascript.ru/closure#nezavisimy-li-schyotchiki
{
  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  // alert( counter() ); // 0
  // alert( counter() ); // 1
  
  // alert( counter2() ); // ?
  // alert( counter2() ); // ?

  // Да, счетчики независимы, поскольку при каждом
  // вызове makeCounter создается своё лексическое окружение
  // результатом будет 0, 1
}


// 4. Объект счётчика
// https://learn.javascript.ru/closure#obekt-schyotchika
{
  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  // alert( counter.up() ); // ?
  // alert( counter.up() ); // ?
  // alert( counter.down() ); // ?

  // Да, четчик будет работать
  // Результаты: 1, 2, 1
}


// 5. Функция внутри if
// https://learn.javascript.ru/closure#funktsiya-vnutri-if
{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      alert(`${phrase}, ${user}`);
    }
  }

  // sayHi();

  // В строгом режиме будет ошибка, поскольку все переменные
  // имеют блочную область видимости, соответственно за пределами
  // блока if функцию sayHi не будет видно.
  // в нестрогом режиме функция будет работать
}


// 6. Функция с помощью замыканий
// https://learn.javascript.ru/closure#summa-s-pomoschyu-zamykaniy
export function sum(a) {
  return function(b) {
    return a + b;
  }
}


// 7. Видна ли переменная?
// https://learn.javascript.ru/closure#vidna-li-peremennaya

{
  let x = 1;

  function func() {
    console.log(x); // ?

    let x = 2;
  }

  // func();

  // Будет ошибка, поскольку переменная инициализируется
  // после обращения к ней, но, поскольку при запусеке
  // скрипта лексическое окружение предварительно заполняется
  // всеми объявленными переменными, ссылка на нее уже существует,
  // но состояние у нее будет Uninitialized
}


// 8. Фильтрация с помощью функции
// https://learn.javascript.ru/closure#filtratsiya-s-pomoschyu-funktsii

export function inBeetwin(a, b) {
  const [min, max] = a < b ? [a, b] : [b, a];
  return item => item >= min && item <= max;
}

export function inArray(arr) {
  return item => arr.includes(item);
}


// 9. Сортировать по полю
// https://learn.javascript.ru/closure#sortirovat-po-polyu

export function byField(field) {
  return (a, b) => {
    const [v1, v2] = [a[field], b[field]];

    if (typeof v1 === 'number') {
      return v1 - v2;
    }

    return v1.localeCompare(v2);
  };
}


// 10. Армия функций
// https://learn.javascript.ru/closure#armiya-funktsiy

export function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    const shoot = i;
    let shooter = function() { // функция shooter
      return( shoot ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

// 1. Связанная функция как метод
// https://learn.javascript.ru/bind#svyazannaya-funktsiya-kak-metod
function task1() {
  // Что выведет функция?
  function f() {
    alert( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();
  // null, поскольку он передан в качестве контекста
}


// 2. Повторный bind
// https://learn.javascript.ru/bind#povtornyy-bind
function task2() {
  // Можем ли мы изменить this дополнительным связыванием?
  // Что выведет этот код?
  function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
  f();
  // изменить привязанный контекст нельзя
  // поэтому результатом будет Вася
}


// 3. Свойство функции после bind
// https://learn.javascript.ru/bind#svoystvo-funktsii-posle-bind
function task3() {
  // В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
  function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему?
  // undefined, результатом bind является другой объект
}


// 4. Исправьте функцию, теряющую "this"
// https://learn.javascript.ru/bind#ispravte-funktsiyu-teryayuschuyu-this
function task4() {
  // Вызов askPassword() в приведённом ниже коде должен проверить пароль
  // и затем вызвать user.loginOk/loginFail в зависимости от ответа.
  // Однако, его вызов приводит к ошибке. Почему?
  // Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  // askPassword(user.loginOk, user.loginFail); // *
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}


// 5. Использование частично применённой функции для логина
// https://learn.javascript.ru/bind#ispolzovanie-chastichno-primenyonnoy-funktsii-dlya-logina
function task5() {
  // Объект user был изменён. Теперь вместо двух функций loginOk/loginFail
  // у него есть только одна – user.login(true/false).

  // Что нужно передать в вызов функции askPassword в коде ниже,
  // чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  // askPassword(?, ?); // ?
  askPassword(user.login.bind(user, true), user.login.bind(user, false));
}

const task11_8_1 = () => {
  // 1. Перепишите, используя async/await
  // https://learn.javascript.ru/task/rewrite-async

  /*
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404
  */

  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json()
    } else {
      throw new Error(response.status);
    }
  }

  loadJson('/any')
    .catch(console.log);

  loadJson('./user.json')
    .then(console.log);
};
// task11_8_1();


const task11_8_2 = () => {
  // 2. Перепишите, используя async/await
  // https://learn.javascript.ru/task/rewrite-async-2

  // В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }

  // Запрашивать логин, пока github не вернёт существующего пользователя.
  // function demoGithubUser() {
  //   let name = prompt("Введите логин?", "iliakan");

  //   return loadJson(`https://api.github.com/users/${name}`)
  //     .then(user => {
  //       alert(`Полное имя: ${user.name}.`);
  //       return user;
  //     })
  //     .catch(err => {
  //       if (err instanceof HttpError && err.response.status == 404) {
  //         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
  //         return demoGithubUser();
  //       } else {
  //         throw err;
  //       }
  //     });
  // }

  async function demoGithubUser() {
    while (true) {
      const name = prompt("Введите логин?", "iliakan");

      try {
        const user = await loadJson(`https://api.github.com/users/${name}`);
        console.log(user);
        console.log(`Полное имя: ${user.name}.`);
        return user;
      } catch(err) {
        if (err instanceof HttpError && err.response.status === 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
  }

  demoGithubUser();
}
// task11_8_2();


const task11_8_3 = () => {
  // 3. Вызовите async–функцию из "обычной"
  // https://learn.javascript.ru/task/async-from-regular

  // Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"

    wait().then(console.log);
  }

  f();
}
// task11_8_3();

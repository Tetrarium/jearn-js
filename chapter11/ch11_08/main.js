"use strict"
console.log("Chapter 11.8");

const example11_8_1 = () => {
  async function f() {
    return 1;
  }

  console.log(f());
  f().then(console.log);
};
// example11_8_1();


const example11_8_2 = () => {
  async function f() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Ready!"), 1000);
    });

    const result = await promise;
    console.log('anything');

    console.log(result);
  }

  f();
};
// example11_8_2();


const example11_8_3 = () => {
  async function showAvatar() {
    const response = await fetch('./user.json');
    const user = await response.json();

    const githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    const githubUser = await githubResponse.json();

    const img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'avatar';
    document.body.append(img);

    await new Promise(resolve => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
  }

  showAvatar();
}
// example11_8_3();


const example11_8_4 = () => {
  class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      console.log(resolve);

      setTimeout(() => resolve(this.num * 2), 3000);
    }
  }

  async function f() {
    const result = await new Thenable(1);
    console.log(result);
  }

  f();
}
// example11_8_4();


const example11_8_5 = () => {
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }

  new Waiter()
    .wait()
    .then(console.log);
}
// example11_8_5();


const example11_8_6 = () => {
  async function f() {
    try {
      const response = await fetch('/any');
    } catch (err) {
      console.log(err);
    }
    console.log('end');
  }

  f();
  console.log('aaa');
}
// example11_8_6();


const example11_8_7 = () => {
  async function f() {
    const response = await fetch('blabla');
  }

  f().catch(console.log);
  console.log('after');
  f();
  console.log('after two');
};
// example11_8_7();

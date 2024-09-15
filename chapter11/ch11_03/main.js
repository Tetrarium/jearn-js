"use strict"
console.log("Chapter 11.1");

const example11_3_1 = () => {
  new Promise((res) => {
    setTimeout(() => res(1), 1000);
  }).then(res => {
    console.log(res);
    return res * 2;
  }).then(res => {
    console.log(res);
    return res * 2;
  }).then(res => {
    console.log(res)
    return res * 2;
  })
}
// example11_3_1();


const example11_3_2 = () => {
  // Бессмыслунный рекурсиыный таймер на промисе
  function foo(result = 1) {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(result)
      }, 1000);
    }).then(result => {
      console.log(result);
      foo(result * 2)
    });
  }

  foo();
}
// example11_3_2();


const example11_3_3 = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }).then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    })
  }).then((result) => {
    console.log(result);

    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    })
  }).then(console.log);
}
// example11_3_3();


const example11_3_4 = () => {
  function loadScript(src) {
    return new Promise((res, rej) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = (evt) => {
        console.log(evt);
        res(script);
      }
      script.onerror = (evt) => {
        console.log(evt);
        rej(new Error('Error Load Script'));
      }
      document.head.append(script);
    })
  }

  const BASE_URL = './scripts';

  loadScript(BASE_URL + '/one.js')
    .then(() => loadScript(BASE_URL + '/two.js'))
    .then(() => loadScript(BASE_URL + '/three.js'))
    .then(() => {
      one();
      two();
      three();
    })
    .catch((e) => console.log(e))
    .finally(() => console.log('Load completed!'));
}
// example11_3_4();


const example11_3_5 = () => {
  class Thenable {
    constructor(num) {
      this.num = num;
    }

    then(resolve, reject) {
      console.log(resolve);
      console.log(resolve === (() => {}).prototype);

      setTimeout(() => resolve(this.num * 2), 1000);
    }
  }

  new Promise(resolve => resolve(1))
    .then(result => new Thenable(result))
    .then(console.log); 
}
// example11_3_5();


const example11_3_6 = () => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10&_page=3')
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}
// example11_3_6();


const example11_3_7 = () => {
  fetch('https://api.github.com/users/tetrarium')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return res.followers_url
    })
    .then(url => fetch(url))
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log('Loading end!'));
}
// example11_3_7();


const example11_3_8 = () => {
  function loadGHUser(login) {
    return fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json());
  }

  function loadGHFollowers(user) {
    return fetch(user.followers_url)
      .then(response => response.json());
  }

  function getFollowersNames(followers) {
    return Promise.all(
      followers.map(follower => loadGHUser(follower.login))
    )
      .then(users => users.map(user => user.name));
  }

  console.log(loadGHUser('tetrarium'));

  loadGHUser('tetrarium')
    .then(response => loadGHFollowers(response))
    .then(followers => getFollowersNames(followers))
    .then(users => console.log(users));
}
example11_3_8();

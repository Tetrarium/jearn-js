"use strict"
console.log("Chapter 11.5");

const example11_5_1 = () => {
  const createPromise = (res, ms) => {
    return new Promise(resolve => setTimeout(() => resolve(res), ms));
  }

  Promise.all([
    createPromise(1, 3000),
    createPromise(2, 2000),
    createPromise(3, 3000),
  ]).then(console.log);
}
// example11_5_1();


const example11_5_2 = () => {
  const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];

  const requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ))
}
// example11_5_2();


const example11_5_3 = () => {
  const names = ['tetrarium', 'iliakan', 'remy', 'jeresig'];

  const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

  Promise.all(requests)
    .then(responses => {
      for (let response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }

      return responses
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => console.log(user.name)))
    .catch(e => console.log(e));
}
// example11_5_3();


const example11_5_4 = () => {
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error(2)), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  ]).catch(console.log);
}
// example11_5_4();


const example11_5_5 = () => {
  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 3000);
    }),
    2,
    3,
  ]).then(console.log);
}
// example11_5_5();


const example11_5_6 = () => {
  const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];

  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
      console.log(results);
    });

  Promise.myAllSettled = function(promises) {
    return Promise.all(
      promises.map(p => Promise.resolve(p).then(value => ({
        status: 'fullfilled',
        value
      }), error => ({
        status: 'rejected',
        reason: error
      })))
    );
  }
  Promise.myAllSettled(urls.map(url => fetch(url)))
    .then(console.log);
  
}
// example11_5_6();


const example11_5_7 = () => {
  const promises = [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  ]

  Promise.race(promises)
    .then(console.log)
    .catch(console.log);
}
// example11_5_7();


const example11_5_8 = () => {
  const promises = [
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ];

  Promise.any(promises)
    .then(console.log);
}
// example11_5_8();


const example11_5_9 = () => {
  const promises = [
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
  ];

  Promise.any(promises)
    .catch(console.dir);
};
// example11_5_9();




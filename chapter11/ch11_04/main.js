"use strict"
console.log('Chapter 11.4');

const example11_4_1 = () => {
  fetch('https://no-server.asdff')
    .then(response => response.json())
    .catch(err => console.log(err))
    .finally(() => console.log('End fetch'));
}
// example11_4_1();


const example11_4_2 = () => {
  new Promise((resolve, reject) => {
    throw new Error('Ошибка!')
  }).catch(e => console.log(e));

  new Promise((resolve, reject) => {
    reject(new Error('Another error'));
  }).catch(e => console.log(e));

  console.log('It is working!');
}
// example11_4_2();


const example11_4_3 = () => {
  new Promise(resolve => {
    resolve('ok');
  }).then((result) => {
    throw new Error('Error!');
  }).catch(e => console.log(e));
}
// example11_4_3();


const example11_4_4 = () => {
  Promise.resolve('ok')
    .then(res => {
      blabla();
    })
    .catch(console.log);
}
// example11_4_4();

const example11_4_5 = () => {
  new Promise((resolve, reject) => {
    throw new Error('Error');
  }).catch(err => {
    console.log(err);
    console.log('Error handled, it is working');
  }).then(() => console.log('Next then is working'));
}
// example11_4_5();


const example11_4_6 = () => {
  new Promise((resolve, reject) => {
    throw new Error('Error in constructor');
  }).catch((err) => {
    console.log('Can not handle error');
    throw err;
  }).then(() => {
    console.log('It will not executed');
  }).catch(err => {
    console.log(`Unknown error ${err}`);
  })
}
// example11_4_6();


const example11_4_7 = () => {
  window.addEventListener('unhandledrejection', (event) => {
    console.log(event.promise);
    console.log(event.reason);
  });

  new Promise(() => {
    throw new Error('Error!');
  });

  console.log('working');

  Promise.resolve('ok')
    .then((result) => { console.log(result) } );

  new Promise(resolve => resolve('it is also ok'))
   .then(result => console.log(result));
}
// example11_4_7();


const example11_4_8 = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error('Whoops!');
    }, 1000);
  }).catch(console.log);
}
// example11_4_8();

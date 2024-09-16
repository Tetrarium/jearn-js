"use strict"
console.log("Chapter 11.7");

const example11_7_1 = () => {
  const promise = Promise.resolve();

  promise.then(() => console.log('promise executed'));

  console.log('code executed');
}
// example11_7_1();


const example11_7_2 = () => {
  Promise.resolve()
    .then(() => console.log("Promise executed"))
    .then(() => console.log('Code executed'));
};
// example11_7_2();


const example11_7_3 = () => {
  const promise = Promise.reject(new Error('Error in promise!'));
  promise.catch(err => console.log('поймана'));

  window.addEventListener('unhandledrejection', event => {
    console.log(event.reason);
  })
}
// example11_7_3();


const example11_7_4 = () => {
  const promise = Promise.reject(new Error("Error in promise"));

  setTimeout(() => promise.catch(err => console.log('catched!')), 1000);

  window.addEventListener('unhandledrejection', evt => console.log(event.reason));
}
// example11_7_4();

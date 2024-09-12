const task11_2_1 = () => {
  // 1. Можно ли "перевыполнить" промис?
  // https://learn.javascript.ru/promise-basics#mozhno-li-perevypolnit-promis
  // Что выведет код ниже?

  let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); // нельзя, выведет 1
}
// task11_2_1();


const task11_2_2 = () => {
  // 2. Задержка на промисах
  // https://learn.javascript.ru/promise-basics#zaderzhka-na-promisah

  function delay(ms) {
    return new Promise((res) => setTimeout(() => res(), ms));
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));
}
// task11_2_2();


const task11_2_3 = () => {
  
}

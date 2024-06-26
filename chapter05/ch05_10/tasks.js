// 1. Деструктурирующее присваивание
// https://learn.javascript.ru/destructuring-assignment#destrukturiruyuschee-prisvaivanie
function task5_10_1() {
  console.log('Задача 5.10.1');

  const user = {
    name: 'John',
    years: 30,
  };

  const { name, years: age, isAdmin = false } = user;

  console.log(name);
  console.log(age);
  console.log(isAdmin);
}
// task5_10_1();


// 2. Максимальная зарплата
// Максимальная зарплата
export function topSalary(salaries) {
  let topPerson = {
    salary: 0,
  };

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > topPerson.salary) {
      topPerson = { name, salary };
    }
  }

  return topPerson.name || null;
}


/** codewars */
// Even or Odd Accessor
// Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 
function task5_10_2() {
  function evenOrOdd(n) {
    //'Even' or 'Odd'
    return n % 2 === 0
      ? 'Even'
      : 'Odd';
  }

  evenOrOdd = new Proxy(evenOrOdd, {
    get(target, prop) {
      return target(prop);
    }
  });
  console.log(evenOrOdd[2]);
  console.log(evenOrOdd(2));
  console.log(evenOrOdd[-41]);
}
task5_10_2();
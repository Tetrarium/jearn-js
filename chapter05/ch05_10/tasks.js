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
task5_10_1();


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

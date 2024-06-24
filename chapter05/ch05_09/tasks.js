// 1. Сумма свойств объекта
// https://learn.javascript.ru/keys-values-entries#summa-svoystv-obekta

export function sumSalaries(salaries) {
  let result = 0;

  for (const salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}


// 2. Подсчёт количества свойств объекта
// https://learn.javascript.ru/keys-values-entries#podschyot-kolichestva-svoystv-obekta
export function count(obj) {
  return Object.keys(obj).length;
}

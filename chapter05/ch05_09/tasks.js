// 1. Сумма свойств объекта
// https://learn.javascript.ru/keys-values-entries#summa-svoystv-obekta

export function sumSalaries(salaries) {
  let result = 0;

  for (const salary of Object.values(salaries)) {
    result += salary;
  }

  return result;
}



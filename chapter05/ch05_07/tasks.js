console.log('tasks');
// таска с LC от Бахтияра
//   Задача 5: Реализация функциональности банкомата
//   Описание: Вам необходимо создать функцию withdraw,
//   которая принимает объект с купюрами и запрашиваемую сумму.
//   Объект с купюрами представляет собой ключи-номиналы и
//   значения-количество купюр. Функция должна попытаться
//   выдать запрашиваемую сумму с учетом различных номиналов
//   купюр. Если денег недостаточно или сумма не может быть
//   составлена из доступных купюр, функция должна вернуть
//   сообщение об ошибке и не изменять объект с купюрами.
//   Если операция успешна, функция должна обновить объект,
//   вычтя выданные купюры.

export function withdraw(cashObject, amount) {
  //   code here...
  let remainder = amount;
  const issue = {};

  const bills = Object.keys(cashObject)
    .map(a => +a)
    .sort((a, b) => b - a);

  for (const bill of bills) {
    if (bill > remainder) continue;

    const needCountBills = ~~(remainder / bill);

    if (needCountBills <= cashObject[bill]) {
      issue[bill] = needCountBills;
      remainder -= needCountBills * bill;
    } else {
      issue[bill] = cashObject[bill];
      remainder -= bill * cashObject[bill];
    }

    if (remainder === 0) break;
  }

  if (remainder > 0) {
    return 'Ошибка: Недостаточно средств или невозможно выдать запрашиваемую сумму.';
  }

  for (const bill in issue) {
    cashObject[bill] -= issue[bill];

    if (cashObject[bill] === 0) {
      delete cashObject[bill];
    }
  }

  return issue;
}


// 1. Фильтрация уникальных элементов массива
// https://learn.javascript.ru/map-set#filtratsiya-unikalnyh-elementov-massiva

export function unique(arr) {
  return [...(new Set(arr))];
}


// 2. Отфильтруйте анаграммы
// https://learn.javascript.ru/map-set#otfiltruyte-anagrammy


export function aclean(arr) {
  const wordsMap = new Map();

  arr.forEach(word => {
    const sorted = word
      .toLowerCase()
      .split('')
      .sort()
      .join('');

    wordsMap.set(sorted, word);
  });

  return [...wordsMap.values()];
}


// 3. Перебираемые ключи
// https://learn.javascript.ru/map-set#perebiraemye-klyuchi
function task5_7_3() {
  console.log('task 3');
  let map = new Map();

  map.set("name", "John");

  // let keys = map.keys();
  // Поскольку keys - перебираемый объект,
  // его нужно сделать массивом
  const keys = [...map.keys()];


  // Error: keys.push is not a function
  // Ошибка: keys.push -- это не функция
  console.log(keys.push("more"));
}
task5_7_3();

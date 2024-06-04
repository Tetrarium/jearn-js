// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// https://learn.javascript.ru/string#sdelat-pervyy-simvol-zaglavnym
export function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}


// Проверка на спам
// https://learn.javascript.ru/string#proverka-na-spam
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
export function checkSpam(str) {
  const keywords = [
    'viagra',
    'xxx',
  ];

  for (let i = 0; i < keywords.length; i++) {
    if (str.toLowerCase().includes(keywords[i])) {
      return true;
    }
  }

  return false;
}


// Усечение строки
// https://learn.javascript.ru/string#usechenie-stroki
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
export function truncate(str, maxlength) {
  return str.length <= maxlength
    ? str
    : str.slice(0, maxlength - 1) + '…';
}


// Выделить число
// https://learn.javascript.ru/string#vydelit-chislo
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
export function extractCurrencyValue(str) {
  return Number(str.slice(1));
}
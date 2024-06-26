// // Задачи с собеседований, просьба не гуглить не искать ответ и интернете
// // Лучше попросить хоста в подсказке направления =>
// // __________________________________________________________________________
// // 1 Убрать рядом стоящие повторы символов
export function toUnique(unique) {
  // code here
  let result = '';

  for (let i = 0; i < unique.length; i++) {
    if (unique[i] != result[result.length - 1]) {
      result = result + unique[i];
    }
  }

  return Array.isArray(unique)
    ? result.split('').join(' ')
    : result;
}
//
// console.log(toUnique("AAAAABBBCCDDDDDABBBCCC")) // ABCDABC
// console.log(toUnique("AAAAABBBCCccDDDAfffBBCCC")) // ABCcDAfBC
// console.log(toUnique([1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5])) // 1 2 3 4 5
// // __________________________________________________________________________
//
// // 2 Убрать "_" "-" и сделать текст согласно CamelCase
export function toUpperString(str) {
  // code here
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') continue;

    if (str[i - 1] === '-' || str[i - 1] === '_') {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }

  return result;
}
//
// console.log(toUpperString("what-a-nice-day-today")) // whatANiceDayToday
// console.log(toUpperString("What_a_nice_day_today")) // WhatANiceDayToday
// console.log(toUpperString("what_a_nice-day_today")) // whatANiceDayToday
// // __________________________________________________________________________
//
// // 3
// //Вернуть два числа в сумме 21. Максимум один цикл.
// let arr = [1, 3, 4, 6, 5, 10, 12, 7, 8, 11, 21, 22]
//
export function findPairWithSum(target, arr) {
  // code here
  const hash = new Set();

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    const b = target - a;

    if (hash.has(b)) {
      return [b, a];
    }

    hash.add(a);
  }

  return null;
}

// export function findPairWithSum(target, arr) {
//   let mapArr = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let complited = target - num;
//     if (mapArr.has(complited)) {
//       return [complited, arr[i]];
//     }
//     mapArr.set(num, i);
//   }
// }
// console.log(findPairWithSum(10, arr));


//
// console.log(findPairWithSum(21, arr))
// // __________________________________________________________________________
//
// // 4
// // Проверить, совпадают ли массивы чисел. Нельзя переводить в строки
export function isSimilar(arr1, arr2) {
  // code here
}
//
// isSimilar([0, 1, 2], [2, 1, 0])
// console.log(isSimilar([0, 1, 2], [2, 1, 0])) // true
// console.log(isSimilar([0, 1], [2, 1, 0]))// false
// console.log(isSimilar([0, 5, 1], [0, 1, 5]))  // true
// // __________________________________________________________________________
//
// // 5
// // Поиск уникального элемента в массиве
// // Напишите функцию, которая находит уникальный элемент в массиве чисел,
// // где все числа повторяются дважды, за исключением одного.
//
// function findUniqueElement(arr) {
// // code here
// }
//
// const arrayExample = [1, 2, 3, 4, 1, 2, 3];
// console.log(findUniqueElement(arrayExample)); // Выведет 4
// const arrayExample2 = [1, 2, 3, 4, 1, 2, 3, 4];
// console.log(findUniqueElement(arrayExample2)); // Выведет null
// const arrayExample3 = [1, 2, 3, 4, 1, 2, 0, 3, 4];
// console.log(findUniqueElement(arrayExample3)); // Выведет 0



// https://ya.cc/t/myeWLoXu55KbMR - Никита
// https://ya.cc/t/HGvxRlyI55KdrE  - Влад
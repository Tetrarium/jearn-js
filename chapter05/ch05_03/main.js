// 'use strict';


// Шаблонная функция
// var person = 'Mike';
// var age = 28;

// function myTag(strings, personExp, ageExp) {
//   var str0 = strings[0];
//   var str1 = strings[1];

//   var ageStr;

//   if (ageExp > 99) {
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   console.log(strings);
//   console.log(personExp);
//   console.log(ageExp);
//   console.log(arguments);

//   return `${str0}${personExp}${str1}${ageStr}`;
// }

// var output = myTag`That ${person} is a ${age} str ${123}`;
// console.log(output);

// console.log('My\n'.length);

// let str = 'Hello';
// console.log(str.at(-2));
// console.log(str.at(-0));
// console.log(str.at(str.length));
// console.log(str.at(-str.length));
// console.log(str.at(-str.length - 1));
// for (let char of str) {
//   console.log(char);
// }
// str[0] = 'h';
// console.log(str);


// Изменение регистра
// Методы toLowerCase() toUpperCase()
// (() => {
//   const str = 'Interface';
//   console.log(str.toLowerCase());
//   console.log(str.toUpperCase());
//   console.log(str[0].toLowerCase());
// })();


// Поиск подстроки
// str.indexOf(substr, [pos])
// substr - подстрока
// pos - начальная позиция поска
// возвращает начальный индекс совпадения либо -1
// (() => {
//   const str = 'Widget with id';
//   console.log(str.indexOf('Widget'));
//   console.log(str.indexOf('widget'));
//   console.log(str.indexOf('id'));
//   console.log(str.indexOf('id', 2));
// })();
// (() => {
//   const str = 'Ослик Иа-Иа посмотрел на виадук';

//   const target = 'Иа';

//   let pos = -1;
//   const positions = [];

//   while (
//     (pos = str.indexOf(target, pos + 1)) !== -1
//   ) {
//     positions.push(pos);
//   }

//   console.log('Найдено в позициях:', positions.toString());

//   console.log(str.indexOf(target, -1));
//   console.log(str.indexOf(target));
//   console.log(str.indexOf(target, 0));
//   console.log(str.indexOf(target, -10));
//   console.log(str.indexOf(target, 10));
//   console.log(str.indexOf(''));
//   console.log(str.indexOf('', 1));
//   console.log(str.indexOf('', 10));
//   console.log(str.indexOf('', -1));
//   console.log(str.indexOf('', str.length));
//   console.log(str.indexOf('', str.length + 999));

//   console.log('lastIndexOf()');
//   console.log(str.lastIndexOf(target, 0));
//   console.log(str.lastIndexOf(target, -1));
//   console.log(str.lastIndexOf(target, str.length));
//   console.log(str.lastIndexOf('', str.length));
// })();


// Побитовое НЕ
// (() => {
//   console.log(~2);
//   console.log(~1);
//   console.log(~0);
//   console.log(~-1);
//   console.log(~-2);

//   const str = 'abc';

//   if (str.indexOf('a')) {
//     console.log('Do not work');
//   }

//   if (~str.indexOf('a')) {
//     console.log('Do work');
//   }
// })();


// str.includes(substr, startPos);

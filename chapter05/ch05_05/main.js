
/** splice */
// (() => {
//   Array.prototype.mySplice = function (start, deleteCount, ...elems) {
//     if (start < 0) {
//       start = this.length + start;
//     }

//     if (deleteCount === undefined || deleteCount > (this.length - start)) {
//       deleteCount = this.length - start;
//     }

//     if (deleteCount < 0) {
//       deleteCount = 0;
//     }

//     const rightCopy = [];
//     const deletedElements = [];
//     const startRigthCopyIndex = start + deleteCount;
//     const shift = elems.length;
//     const originLength = this.length;

//     // copy deleted elements
//     for (let i = start; i < startRigthCopyIndex; i++) {
//       deletedElements[i - start] = this[i];
//     }

//     // copy right remainded elements
//     for (let i = startRigthCopyIndex; i < this.length; i++) {
//       rightCopy[i - startRigthCopyIndex] = this[i];
//     }

//     // fill origin array by added elems
//     for (let i = start; i < start + shift; i++) {
//       this[i] = elems[i - start];
//     }

//     const startInsertRemainderIndex = start + shift;
//     // fill origin array remainder elems
//     for (let i = startInsertRemainderIndex; i < startInsertRemainderIndex + rightCopy.length; i++) {
//       this[i] = rightCopy[i - startInsertRemainderIndex];
//     }

//     // update length
//     this.length = originLength - deleteCount + shift;

//     return deletedElements;
//   };

//   // тесты
//   [].mySplice(0, 0, 'a', 'b');
//   const arr1 = [1, 2, 3, 4, 5];
//   console.log(arr1.mySplice(2, 2, 6, 7, 8, 9));
//   console.log(arr1);

//   (() => {
//     console.log('Удаляет 0 элементов по индексу 2 и вставляет "drum"');
//     const myFish = ["angel", "clown", "mandarin", "sturgeon"];
//     const removed = myFish.splice(2, 0, "drum");

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет 1 элемент по индексу 3');
//     const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
//     const removed = myFish.splice(3, 1);

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет 1 элемент по индексу 2 и вставляет "trumpet"');
//     const myFish = ["angel", "clown", "drum", "sturgeon"];
//     const removed = myFish.splice(2, 1, "trumpet");

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"');
//     const myFish = ["angel", "clown", "trumpet", "sturgeon"];
//     const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет 2 элемента начиная с индекса 2');
//     const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
//     const removed = myFish.splice(myFish.length - 3, 2);

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет 1 элемент по индексу -2');
//     const myFish = ["angel", "clown", "mandarin", "sturgeon"];
//     const removed = myFish.splice(-2, 1);

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удаляет все элементы после индекса 2 (включительно)');
//     const myFish = ["angel", "clown", "mandarin", "sturgeon"];
//     const removed = myFish.splice(2);

//     console.log(myFish);
//     console.log(removed);
//   })();

//   (() => {
//     console.log('Удалаяет все элементы');
//     const myFish = ["angel", "clown", "mandarin", "sturgeon"];
//     const removed = myFish.splice(0, myFish.length + 5);

//     console.log(myFish);
//     console.log(removed);
//   })();
// })();


/** slice */
// (() => {
//   Array.prototype.mySlice = function (start, end) {
//     if (start === undefined) {
//       start = 0;
//     }

//     if (start < 0) {
//       const newStart = this.length + start;
//       start = newStart > 0 ? newStart : 0;
//     }

//     if (end === undefined) {
//       end = this.length;
//     }

//     if (end < 0) {
//       const newEnd = this.length + end;
//       end = newEnd > 0 ? newEnd : 0;
//     }

//     const result = [];

//     for (let i = start; i < end; i++) {
//       result[i - start] = this[i];
//     }

//     return result;
//   };

//   const arr = 'test'.split('');

//   console.log(arr.mySlice(1, 3));
//   console.log(arr.mySlice(-2));

//   console.log(arr.slice(-10, -1));
//   console.log(arr.mySlice(-10, -1));

// })();


/** concat */
// (() => {
//   Array.prototype.myConcat = function (...args) {
//     const result = [];

//     let index = 0;

//     // fill result from origin array 
//     while (index < this.length) {
//       result[index] = this[index];
//       index += 1;
//     }

//     // fill result from arguments
//     for (let i = 0; i < args.length; i++) {
//       const arg = args[i];

//       if (Array.isArray(arg) || arg[Symbol.isConcatSpreadable]) {
//         for (let j = 0; j < arg.length; j++) {
//           result[index] = arg[j];
//           index += 1;
//         }
//       } else {
//         result[index] = arg;
//         index += 1;
//       }
//     }

//     return result;
//   };

//   (() => {
//     const arr = [1, 2];

//     console.log(arr.myConcat()); // [1, 2]
//     console.log(arr.myConcat([3, 4])); // [1, 2, 3, 4]
//     console.log(arr.concat([])); // [1, 2]
//     console.log(arr.myConcat([])); // [1, 2]
//     console.log(arr.myConcat([3, 4], [5, 6])); // [1, 2, 3, 4, 5, 6]
//     console.log(arr.myConcat([3, 4], 5, 6)); // [1, 2, 3, 4, 5, 6]
//     console.log(arr.myConcat([3, 4, [5, 6]])); // [1, 2, 3, 4, [5, 6]]
//     console.log(arr.concat([3, 4, [5, 6]])); // [1, 2, 3, 4, [5, 6]]

//     const arrayLike = {
//       0: 'something',
//       length: 1
//     };
//     console.log(arr.myConcat(arrayLike));

//     // myConcat с этим не работает
//     // надо подумать как пофиксить
//     // Проблема решена добавлением проверки на [Symbol.isConcatSpreadable]
//     const arrayLike2 = {
//       0: 'something',
//       1: 'again',
//       [Symbol.isConcatSpreadable]: true,
//       length: 2,
//     };

//     console.log(arr.myConcat(arrayLike2));
//     console.log(arr.concat(arrayLike2));
//   })();
// })();

/** forEach */
// (() => {
//   Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//       cb(this[i], i, this);
//     }
//   };

//   const arr = ["Бильбо", "Гэндальф", "Назгул"];

//   arr.myForEach(console.log);
//   arr.myForEach((item, index, array) => {
//     console.log(`У ${item} индекс ${index} в ${array}`);
//   });
// })();


/** indexOf */
(() => {
  Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    const { length } = this;

    if (fromIndex >= length) {
      return -1;
    }

    if (fromIndex < 0) {
      const newIndex = length + fromIndex;
      fromIndex = newIndex > 0 ? newIndex : 0;
    }

    for (let i = fromIndex; i < length; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }

    return -1;
  };

  (() => {
    console.log('Тесты');
    const arr = [1, 0, false];

    console.log(arr.myIndexOf(0));
    console.log(arr.myIndexOf(false));
    console.log(arr.myIndexOf(null));
  })();
})();

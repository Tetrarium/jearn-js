(() => {
  Array.prototype.mySplice = function (start, deleteCount, ...elems) {
    if (start < 0) {
      start = this.length + start;
    }

    if (deleteCount === undefined || deleteCount > (this.length - start)) {
      deleteCount = this.length - start;
    }

    if (deleteCount < 0) {
      deleteCount = 0;
    }

    const rightCopy = [];
    const deletedElements = [];
    const startRigthCopyIndex = start + deleteCount;
    const shift = elems.length;
    const originLength = this.length;

    // copy deleted elements
    for (let i = start; i < startRigthCopyIndex; i++) {
      deletedElements[i - start] = this[i];
    }

    // copy right remainded elements
    for (let i = startRigthCopyIndex; i < this.length; i++) {
      rightCopy[i - startRigthCopyIndex] = this[i];
    }

    // fill origin array by added elems
    for (let i = start; i < start + shift; i++) {
      this[i] = elems[i - start];
    }

    const startInsertRemainderIndex = start + shift;
    // fill origin array remainder elems
    for (let i = startInsertRemainderIndex; i < startInsertRemainderIndex + rightCopy.length; i++) {
      this[i] = rightCopy[i - startInsertRemainderIndex];
    }

    // update length
    this.length = originLength - deleteCount + shift;

    return deletedElements;
  };

  [].mySplice(0, 0, 'a', 'b');
  const arr1 = [1, 2, 3, 4, 5];
  console.log(arr1.mySplice(2, 2, 6, 7, 8, 9));
  console.log(arr1);

  (() => {
    console.log('Удаляет 0 элементов по индексу 2 и вставляет "drum"');
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2, 0, "drum");

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет 1 элемент по индексу 3');
    const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    const removed = myFish.splice(3, 1);

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет 1 элемент по индексу 2 и вставляет "trumpet"');
    const myFish = ["angel", "clown", "drum", "sturgeon"];
    const removed = myFish.splice(2, 1, "trumpet");

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"');
    const myFish = ["angel", "clown", "trumpet", "sturgeon"];
    const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет 2 элемента начиная с индекса 2');
    const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
    const removed = myFish.splice(myFish.length - 3, 2);

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет 1 элемент по индексу -2');
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(-2, 1);

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удаляет все элементы после индекса 2 (включительно)');
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(2);

    console.log(myFish);
    console.log(removed);
  })();

  (() => {
    console.log('Удалаяет все элементы');
    const myFish = ["angel", "clown", "mandarin", "sturgeon"];
    const removed = myFish.splice(0, myFish.length + 5);

    console.log(myFish);
    console.log(removed);
  })();
})();
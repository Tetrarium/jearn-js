Array.prototype.myPop = function () {
  const lastElem = this[this.length - 1];

  this.length = this.length - 1;

  return lastElem;
};

const arr = ['Mango', 'Pineapple', 'Apple', 'Pen'];
const lastElem = arr.myPop();
console.log(arr);
console.log(lastElem);
console.log(arr[arr.length]);
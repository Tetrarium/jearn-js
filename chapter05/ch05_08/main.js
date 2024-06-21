console.log('Chapter 5.8');

function example5_8_1() {
  let john = { name: 'John' };

  const arr = [john];

  john = null;

  console.log(arr);
}
// example5_8_1();


function example5_8_2() {
  let john = { name: 'John' };

  const map = new Map();
  map.set(john, '...');

  john = null;
  console.log(john);
  console.log(map);
}
// example5_8_2();


function example5_8_3() {
  console.log('WeakMap');

  const weakMap = new WeakMap();

  const obj = {};
  weakMap.set(obj, 'ok');
  console.log(weakMap);
  console.log(weakMap.has(obj));
  console.log(weakMap.has({}));

  // weakMap.set('test', 'error');
  // console.log(weakMap);
}
// example5_8_3();


function example5_8_4() {
  console.log('WeakMap');

  let john = { name: 'John' };
  const weakMap = new WeakMap();
  weakMap.set(john, 'any');

  console.log(weakMap);

  john = null;
  console.log(weakMap);
}
// example5_8_4();

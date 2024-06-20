console.log('Chapter 5.7');

function example5_7_1() {
  console.log('Map');

  const map = new Map();

  map.set('1', 'str1');
  map.set(1, 'num1');
  map.set(true, 'bool1');

  console.log(map);
  console.log(map.get(1));
  console.log(map.get('1'));
  console.log(map.get(true));
  console.log(map.size);
}
// example5_7_1();


function example5_7_2() {
  const john = { name: 'john' };
  const visitsCountMap = new Map();

  visitsCountMap.set(john, 123);

  console.log(visitsCountMap);
  console.log(visitsCountMap.get(john));

  const ben = { name: 'Ben' };
  const visitsCountObj = {};

  visitsCountObj[john] = 123;
  visitsCountObj[ben] = 456;

  console.log(visitsCountObj[john]);
  console.log(visitsCountObj[ben]);

  const map = new Map();

  console.log(
    map
      .set('1', 'string')
      .set(2, 'number')
      .set(true, 'boolean')
      .set({}, 'object')
  );
}
// example5_7_2();






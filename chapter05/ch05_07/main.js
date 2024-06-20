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


function example5_7_3() {
  console.log('Перебор Map');

  const recipeMap = new Map([
    ['огурец', 500],
    ['помидор', 500],
    ['лук', 50],
  ]);

  console.log(recipeMap);

  console.log(recipeMap.keys());
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
  }

  console.log(recipeMap.values());
  for (let amount of recipeMap.values()) {
    console.log(amount);
  }

  console.log(recipeMap.entries());
  for (let val of recipeMap) {
    console.log(val);
  }

  for (let entry of recipeMap.entries()) {
    console.log(entry);
  }

  console.log(recipeMap.toString());
  console.log(recipeMap.valueOf());

  console.log(recipeMap.valueOf() === recipeMap);

  console.log('\nforEach');
  recipeMap.forEach((value, key, map) => {
    console.log('value: ', value);
    console.log('key: ', key);
    console.log('map: ', map);
    console.log('^^^^^');
  });
}
// example5_7_3();


function example5_7_4() {
  console.log('Object.entries: Map из Object');

  const map = new Map([
    ['1', 'str'],
    [1, 'num'],
    [true, 'bool'],
  ]);

  console.log(map);

  const obj = {
    name: 'John',
    age: 30,
  };

  console.log(new Map(Object.entries(obj)));
}
// example5_7_4();

function example5_7_5() {
  console.log('Object.fromEntries: Object из Map');

  const entries = [
    ['banana', 1],
    ['orange', 2],
    ['meat', 4],
  ];

  console.log(Object.fromEntries(entries));

  const map = new Map(entries);
  console.log(map);
  console.log(Object.fromEntries(map));
}
// example5_7_5();


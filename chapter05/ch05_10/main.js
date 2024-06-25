console.log('Chapter 5.10');

function example5_10_1() {
  const arr = ['John', 'Doe'];

  const [firstName, lastName] = arr;

  console.log(firstName);
  console.log(lastName);
}
// example5_10_1();


function example5_10_2() {
  const [firstName, lastName] = 'John Doe'.split(' ');

  console.log(firstName);
  console.log(lastName);
}
// example5_10_2();


function example5_10_3() {
  const [a, b, c] = 'abc';

  console.log(a);
  console.log(b);
  console.log(c);

  const [one, two, three] = new Set([1, 2, 3]);
  console.log(one);
  console.log(two);
  console.log(three);
}
// example5_10_3();


function example5_10_4() {
  const user = {};
  [user.firstName, user.lastName] = 'John Doe'.split(' ');

  console.log(user);
}
// example5_10_4();


function example5_10_5() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
}
// example5_10_5();


function example5_10_6() {
  const user = new Map();
  user.set('firstName', 'John');
  user.set('lastName', 'Doe');
  user.set('age', 30);

  for (const [key, value] of user) {
    console.log(`${key}: ${value}`);
  }
}
// example5_10_6();


function example5_10_7() {
  let guest = 'Jane';
  let admin = 'Pete';

  console.log(`guest: ${guest}`);
  console.log(`admin: ${admin}`);

  [guest, admin] = [admin, guest];

  console.log(`guest: ${guest}`);
  console.log(`admin: ${admin}`);

}
// example5_10_7();


function example5_10_8() {
  const [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  console.log(name1);
  console.log(name2);
  console.log(rest);
}
// example5_10_8();


function example5_10_9() {
  const [firstName = 'Guest', lastName = prompt('Last Name?d')] = ['John'];

  console.log(firstName);
  console.log(lastName);
}
// example5_10_9();


function example5_10_10() {
  const options = {
    title: 'Menu',
    width: 100,
    height: 200,
  };

  const { title, width, height } = options;

  console.log(title);
  console.log(width);
  console.log(height);

  const { width: w, height: h } = options;
  console.log(w);
  console.log(h);

  const { title: t, ...rest } = options;
  console.log(t);
  console.log(rest);
}
// example5_10_10();


function example5_10_11() {
  const options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true,
  };

  const {
    size: {
      // width,
      height,
    },
    size,
    items: [item1, item2],
    title = 'Menu',
    ...rest
  } = options;

  console.log(title);
  // console.log(width);
  console.log(height);
  console.log(item1);
  console.log(item2);
  console.log(rest);
  console.log(size);
}
// example5_10_11();


function example5_10_12() {
  const optoins = {
    title: 'My menu',
    items: ['Item1', 'Item2'],
  };

  function showMenu({
    title = 'Untitled',
    width: w = 200,
    height: h = 100,
    items = [],
  } = {}) {
    console.log(`${title} ${w} ${h}`);
    console.log(items);
  }

  showMenu(optoins);
  showMenu();
}
// example5_10_12();


function example5_10_13() {
  const arr = [1, 2];

  const { 0: item1, 1: item2 } = arr;
  console.log(item1, item2);

  const obj = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,

        next() {
          return this.current <= this.last
            ? { done: false, value: this.current++ }
            : { done: true };
        }
      };
    }
  };

  const [elem1, ...rest] = obj;
  console.log(elem1);
  console.log(rest);
}
// example5_10_13();

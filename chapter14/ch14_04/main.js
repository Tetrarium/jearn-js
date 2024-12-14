console.log('Chapter 14.4');

const example14_4_1 = () => {
  const user = {
    name: 'Vasya',
    hi() { console.log(`Hi, ${this.name}!`) },
    bye() { console.log('Bye!') },
  }

  user.hi();

  (user.name === 'Vasya' ? user.hi : user.bye)();
}
// example14_4_1();


const example14_4_2 = () => {
  const user = {
    name: 'John',
    go() {console.log(this.name)},
  }

  (user.go)(); // Cannot access 'user' before initialization
}
// example14_4_2();


const example14_4_3 = () => {
  let obj, method;

  obj = {
    go() {console.log(this)}
  }

  obj.go(); // obj

  (obj.go()); // obj

  (method = obj.go)(); // undefined

  (obj.go || obj.stop)(); // undefined
}
example14_4_3();

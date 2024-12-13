console.log('Chapter 14.2');

const example14_2_1 = () => {
  const code = 'console.log("Hello!")';
  eval(code);
}
// example14_2_1();


const example14_2_2 = () => {
  const value = eval('1+1');
  console.log(value);d
}
// example14_2_2();

const example14_2_3 = () => {
  const fooStr = `
    function f(a) {
      return a * 2;
    }
  `;
  console.log(fooStr);
  const foo = eval(fooStr);
  console.log(foo);
}
// example14_2_3();

const example14_2_4 = () => {
  const value = eval('let i = 0; ++i');
  console.log(value);
}
// example14_2_4();


const example14_2_5 = () => {
  const a = 1;

  function f() {
    const a = 2;

    eval('console.log(a)');
  }

  f();
}
// example14_2_5();

const example14_2_6 = () => {
  let x = 5;

  eval('x = 10');

  console.log(x);
}
// example14_2_6();

const example14_2_7 = () => {

  eval("let x = 5; function f() {}");

  console.log(typeof x);
}
// example14_2_7();


const task14_2_1 = () => {
  // Eval-калькулятор
  // https://learn.javascript.ru/task/eval-calculator

  const exp = prompt('');
  console.log(eval(exp));
}
// task14_2_1();

const task14_2_2 = () => {
  // Преобразование строки в функцию

  function createFunc(fnStr) {
    return eval(fnStr);
  }

  const sum = createFunc('(a, b) => a + b');
  console.log(sum(2, 3));


}
task14_2_2();

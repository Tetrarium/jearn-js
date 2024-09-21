console.log('Chapter 12.1');


const example12_1_1 = () => {
  function* generateSequence() {
    console.log('a');
    yield 1;
    console.log('b');
    yield 2;
    console.log('c');
    return 3;
  }

  const generator = generateSequence();

  console.log(generator);
  console.log(generator.next());

  console.log(generator.__proto__);

  // console.log(generator.return());
  console.log(generator.next());

  console.log(generator.next());
}
example12_1_1();

const { A, B } = require('../tasks');

test('new A() == new B() должно быть true', () => {
  const a = new A();
  const b = new B();

  expect(a == b).toBeTruthy();
});
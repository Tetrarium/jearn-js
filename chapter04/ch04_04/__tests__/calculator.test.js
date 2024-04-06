const { calculator } = require('../tasks');

describe('test calculator', () => {

  test('sum 2 and 3 return 5', () => {
    calculator.read(2, 3);
    expect(calculator.sum()).toBe(5);
  });

  test('mul 2 and 3 return 6', () => {
    calculator.read(2, 3);
    expect(calculator.mul()).toBe(6);
  });

  test('sum 4 and 6 return 10', () => {
    calculator.read(4, 6);
    expect(calculator.sum()).toBe(10);
  });

  test('mul 4 and 6 return 24', () => {
    calculator.read(4, 6);
    expect(calculator.mul()).toBe(24);
  });
});

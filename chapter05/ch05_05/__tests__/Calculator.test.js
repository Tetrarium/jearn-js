import { Calculator } from "../tasks";

describe('Test Calculator', () => {
  let calculator;
  beforeAll(() => {
    calculator = new Calculator;
  });

  test('calculate(12 + 34) = 46', () => {
    expect(calculator.calculate('12 + 34')).toBe(46);
  });

  test('calculate(34 - 12) = 22', () => {
    expect(calculator.calculate('34 - 12')).toBe(22);
  });

  test('add multiplication: calculate(2 * 3) = 6', () => {
    calculator.addMethod('*', (a, b) => a * b);
    expect(calculator.calculate('2 * 3')).toBe(6);
  });

  test('add power: calculate(2 ** 3) = 8', () => {
    calculator.addMethod('**', (a, b) => a ** b);
    expect(calculator.calculate('2 ** 3')).toBe(8);
  });
});
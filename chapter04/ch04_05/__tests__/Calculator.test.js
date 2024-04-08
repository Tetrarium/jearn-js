const { Calculator } = require('../tasks');
global.prompt = jest.fn();

describe('Конструктор Calculator со значениями 2 и 3', () => {
  let calculator;

  beforeAll(() => {
    calculator = new Calculator;

    prompt
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3');

    calculator.read();
  });

  test('read() спрашивает два значения, используя prompt и запоминает их в свойствах', () => {
    expect(calculator.a).toBe(2);
    expect(calculator.b).toBe(3);
  });

  test('sum() возвращает 5', () => {
    expect(calculator.sum()).toBe(5);
  });

  test('mul() вовзвращает 6', () => {
    expect(calculator.mul()).toBe(6);
  });

  afterAll(() => {
    prompt.mockReset();
  });
});


describe('Конструктор Calculator со значениями 5 и 7', () => {
  let calculator;

  beforeAll(() => {
    calculator = new Calculator;

    prompt
      .mockReturnValueOnce('5')
      .mockReturnValueOnce('7');

    calculator.read();
  });

  test('read() спрашивает два значения, используя prompt и запоминает их в свойствах', () => {
    expect(calculator.a).toBe(5);
    expect(calculator.b).toBe(7);
  });

  test('sum() возвращает 12', () => {
    expect(calculator.sum()).toBe(12);
  });

  test('mul() возвращает 35', () => {
    expect(calculator.mul()).toBe(35);
  });

  afterAll(() => {
    prompt.mockReset();
  });
});
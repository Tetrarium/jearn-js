const { Accumulator } = require('../tasks');
global.prompt = jest.fn();

describe('Accumulator', () => {
  afterEach(() => {
    prompt.mockReset();
  });

  test('Начальное значение аккумулятора из конструктора без аргумента', () => {
    const accumulator = new Accumulator();
    expect(accumulator.value).toBe(0);
  });

  test('Начальное значение аккумулятора из аргумента конструктора', () => {
    const accumulator = new Accumulator(1);
    expect(accumulator.value).toBe(1);
  });

  test('После чтения 0, занчение 1', () => {
    const accumulator = new Accumulator(1);
    prompt.mockReturnValue("0");
    accumulator.read();
    expect(accumulator.value).toBe(1);
  });

  test('После чтения 1, значение 2', () => {
    const accumulator = new Accumulator(1);
    prompt.mockReturnValue("1");
    accumulator.read();
    expect(accumulator.value).toBe(2);
  });

  test('После чтения неправильного заначения результат не меняется (1)', () => {
    const accumulator = new Accumulator(1);
    prompt.mockReturnValue('abcd123');
    accumulator.read();
    expect(accumulator.value).toBe(1);
  });
});
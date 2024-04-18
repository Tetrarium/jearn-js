import numFormat from './numFormat';

describe('тест numFormat', () => {
  test('является функцией', () => {
    expect(numFormat).toBeInstanceOf(Function);
  });

  test.each([
    [123.123, '123.123'],
    [12345, '12 345'],
    [123456.123, '123 456.123'],
    [123456789, '123 456 789'],
    [12345678901.12345, '12 345 678 901.12345'],
    [-12345678901.1234, '-12 345 678 901.1234'],
    [-123456789.123, '-123 456 789.123']
  ])('c %d вернет %s', (num, expected) => {
    expect(numFormat(num)).toBe(expected);
  });
});
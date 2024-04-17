import './myToUpper';

describe('тест метода myToUpper', () => {
  test('метод существует', () => {
    expect('str'.myToUpper).toBeInstanceOf(Function);
  });

  test.each([
    ['abc', 'ABC'],
    ['a5b6C9', 'A5B6C9'],
    ['абв', 'АБВ'],
  ])('применение к строке %s возвращает %s', (str, expected) => {
    expect(str.myToUpper()).toBe(expected);
  });
});
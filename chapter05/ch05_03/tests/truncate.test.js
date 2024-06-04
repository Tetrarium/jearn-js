import { truncate } from "../tasks";

describe('function truncate', () => {
  test.each([
    ['Вот, что мне хотелось бы сказать на эту тему:', 20, 'Вот, что мне хотело…'],
    ['Всем привет!', 20, 'Всем привет!'],
  ])('with "%s" and length %d returns "%s"', (str, maxlength, expected) => {
    expect(truncate(str, maxlength)).toBe(expected);
  });
});
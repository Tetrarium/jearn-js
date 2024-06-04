import { ucFirst } from "../tasks";

describe('test ucFirst', () => {
  test.each([
    ['вася', 'Вася'],
    ['local', 'Local'],
    ['Aboba', 'Aboba']
  ])('with %s could be return %s', (str, expected) => {
    expect(ucFirst(str)).toBe(expected);
  });
});
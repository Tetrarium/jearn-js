import { camelize } from "../tasks";

describe('test function camelize', () => {
  test.each([
    ['', ''],
    ['background-color', 'backgroundColor'],
    ['list-style-image', 'listStyleImage'],
    ['-webkit-transition', 'WebkitTransition'],
  ])('with %s returns %s', (str, expected) => {
    expect(camelize(str)).toBe(expected);
  });
});

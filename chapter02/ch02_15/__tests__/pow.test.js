const { pow } = require('../tasks');

describe.each([
  [3, 2, 9],
  [3, 3, 27],
  [1, 100, 1],
  [1, 1, 1],
  [1, 2, 1],
  [1, -1, null],
  [1, 1.25, null],
])('pow(%f, %f)', (x, n, expected) => {
  test(`returns ${expected}`, () => {
    expect(pow(x, n)).toBe(expected);
  });
});

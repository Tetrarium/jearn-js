const { min } = require('../tasks');

describe.each([
  [2, 5, 2],
  [3, -1, -1],
  [1, 1, 1],
  [250, 25, 25],
])(('min(%i, %i)'), (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(min(a, b)).toBe(expected);
  });
});
import { factorial } from "../tasks";

describe('factorial(n)', () => {
  test.each([
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
    [5, 120],
    [6, 720],
    [7, 5040],
    [8, 40320],
    [9, 362880],
    [10, 3_628_800],
  ])('with %d returns %d', (arg, expected) => {
    expect(factorial(arg)).toBe(expected);
  });
});

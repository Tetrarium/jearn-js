import { fib, iterativeFib } from "../tasks";

describe.each([
  fib,
  iterativeFib,
])('test $name', (fn) => {
  test.each([
    [1, 1],
    [2, 1],
    [3, 2],
    [7, 13],
    [77, 5527939700884757],
  ])('with %d returns %d', (n, expected) => {
    expect(fn(n)).toBe(expected);
  });
});

import { sum } from "../tasks";
global.alert = jest.fn();

test.each([
  [1, 2, 3],
  [5, -1, 4],
])('sum(%d)(%d) returns %d', (a, b, expected) => {
  expect(sum(a)(b)).toBe(expected);
});
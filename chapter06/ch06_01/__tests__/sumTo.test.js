import { iterationSumTo, recursionSumTo, progressionSumTo } from "../tasks";

describe.each([
  ['iterationSumTo', iterationSumTo],
  ['recursionSumTo', recursionSumTo],
  ['progressionSumTo', progressionSumTo],
])('test function %s', (nameFn, fn) => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 3],
    [3, 6],
    [4, 10],
    [100, 5050],
  ])(`${nameFn}(%d) returns %d`, (arg, expected) => {
    expect(fn(arg)).toBe(expected);
  });
});

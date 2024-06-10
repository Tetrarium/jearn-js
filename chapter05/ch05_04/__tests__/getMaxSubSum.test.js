import { getMaxSubSum } from "../tasks";

describe('test getMaxSubSum', () => {
  test.each([
    [[1, 2, 3], 6],
    [[-1, 2, 3, -9], 5],
    [[-1, 2, 3, -9, 11], 11],
    [[-2, -1, 1, 2], 3],
    [[100, -9, 2, -3, 5], 100],
    [[], 0],
    [[-1], 0],
    [[2, -1, 2, 3, -9], 6],
    [[2, -8, 5, -1, 2, -3, 2], 6],
    [[-1, -2, -3], 0],
  ])('With arguments: %p returns %d', (args, expected) => {
    expect(getMaxSubSum(args)).toBe(expected);
  });
});
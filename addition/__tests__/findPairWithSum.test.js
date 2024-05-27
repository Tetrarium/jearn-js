import { findPairWithSum } from "../LC_24.05";

describe('test findPairWithSum(target, arr)', () => {
  test.each([
    [21, [1, 3, 4, 6, 5, 10, 12, 7, 8, 11, 21, 22], [10, 11]],
    [10, [1, 5, 12, 32, 7, 2], null],
    [11, [1, 5, 12, 32, 7, 2], null],
    [10, [1, 3, 4, 6, 5, 10, 12, 7, 8, 11, 21, 22], [4, 6]],
  ])('С целевым числом %d и массивом %p должно вернуть %p', (target, arr, expected) => {
    expect(findPairWithSum(target, arr)).toEqual(expected);
  });
});
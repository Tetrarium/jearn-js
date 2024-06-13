import { filterRangeInPlace } from "../tasks";

describe('filterRangeInPlace', () => {
  test('returns the filtered values', () => {
    const arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 2, 5);
    expect(arr).toEqual([5, 3]);
  });

  test('doesn\'t return anything', () => {
    expect(filterRangeInPlace([1, 2, 3], 1, 4)).toBeUndefined();
  });
});

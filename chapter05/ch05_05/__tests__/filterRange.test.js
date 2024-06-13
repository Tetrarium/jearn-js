import { filterRange } from "../tasks";

describe('filterRange', () => {
  let arr;
  beforeAll(() => {
    arr = [5, 3, 8, 1];
  });
  test('returns the filtered values', () => {
    expect(filterRange(arr, 1, 4)).toEqual([3, 1]);
  });
  test('doesn\'t change the array', () => {
    expect(arr).toEqual([5, 3, 8, 1]);
  });
});

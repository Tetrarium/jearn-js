import { inBeetwin, inArray } from "../tasks";

describe('test filters', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  test('inBeetwin(3, 6) returns [3, 4, 5, 6]', () => {
    expect(arr.filter(inBeetwin(3, 6))).toEqual([3, 4, 5, 6]);
  });

  test('inBeetwin(6, 3) returns [3, 4, 5, 6]', () => {
    expect(arr.filter(inBeetwin(6, 4))).toEqual([4, 5, 6]);
  });

  test('inArray([1, 2, 10]) returns [1, 2]', () => {
    expect(arr.filter(inArray([1, 2, 10]))).toEqual([1, 2]);
  });
});

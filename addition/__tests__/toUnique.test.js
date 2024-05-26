import { toUnique } from "../LC_24.05";

describe('test toUnique', () => {
  test.each([
    ['AAAAABBBCCDDDDDABBBCCC', 'ABCDABC'],
    ['AAAAABBBCCccDDDAfffBBCCC', 'ABCcDAfBC'],
    [[1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5], '1 2 3 4 5'],
  ])('%p to equal %s', (arg, expected) => {
    expect(toUnique(arg)).toBe(expected);
  });
});
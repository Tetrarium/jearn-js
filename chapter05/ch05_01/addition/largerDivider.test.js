import { largerDivider } from "./largerDivider";

describe('Test larger divider', () => {
  test.each([
    [2, 4, 2],
    [3, 9, 3],
    [4, 2, 2],
    [4, 3, 1],
    [4, 4, 4],
    [4, 6, 2],
    [252, 24, 12],
  ])('Наибольший общий делитель %d и %d равен %d', (a, b, expected) => {
    expect(largerDivider(a, b)).toBe(expected);
  });
});
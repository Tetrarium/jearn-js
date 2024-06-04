import { checkSpam } from "../tasks";
describe('checkSpam', () => {
  test.each([
    ['buy ViAgRA now', true],
    ['free xxxxx', true],
    ['innocent rabbit', false],
  ])('with %s returns %p', (str, expected) => {
    expect(checkSpam(str)).toBe(expected);
  });
});
import { extractCurrencyValue } from "../tasks";

describe('extractCurrencyValue', () => {
  test.each([
    ['$120', 120],
    ['$90', 90],
  ])('with "%s" returns %d', (str, expected) => {
    expect(extractCurrencyValue(str)).toBe(expected);
  });
});
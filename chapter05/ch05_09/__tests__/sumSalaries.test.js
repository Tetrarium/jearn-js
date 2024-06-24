import { sumSalaries } from "../tasks";

describe('sumSalaries', () => {
  test('Returns 650', () => {
    const salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    expect(sumSalaries(salaries)).toBe(650);
  });

  test('return 0 for the empty object', () => {
    expect(sumSalaries({})).toBe(0);
  });
});

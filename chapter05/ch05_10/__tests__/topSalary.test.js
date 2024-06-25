import { topSalary } from "../tasks";

describe('topSalary', () => {
  test('returns top-paid person', () => {
    const salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

    expect(topSalary(salaries)).toBe('Pete');
  });

  test('returns null for the empty object', () => {
    expect(topSalary({})).toBeNull();
  });
});

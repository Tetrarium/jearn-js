import { count } from "../tasks";

describe('count', () => {
  test('counts the number of properties', () => {
    expect(count({ a: 1, b: 2 })).toBe(2);
  });

  test('returns 0 for an empty object', () => {
    expect(count({})).toBe(0);
  });

  test('ignores symbolic properties', () => {
    expect(count({ [Symbol('id')]: 1 })).toBe(0);
  });
});

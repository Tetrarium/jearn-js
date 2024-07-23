import { makeCounter } from "../tasks";

describe('test makeCounter', () => {
  let counter;
  beforeEach(() => {
    counter = makeCounter();
  });

  test('increase from call to call', () => {
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });

  test('counter.set', () => {
    expect(counter.set(10)).toBe(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
  });

  test('counter.decrease', () => {
    expect(counter.set(10)).toBe(10);
    expect(counter.decrease()).toBe(10);
    expect(counter.decrease()).toBe(9);
    expect(counter.decrease()).toBe(8);
  });
});

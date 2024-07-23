import { sum } from "../tasks";

describe('test sum', () => {
  test('sum(1) equal 1', () => {
    console.log(sum);
    expect(sum(1) == 1).toBeTruthy();
  }); 

  test('sum(1)(2) equal 3', () => {
    expect(sum(1)(2) == 3).toBeTruthy();
  });

  test('sum(1)(2)(3) equal 6', () => {
    expect(sum(1)(2)(3).toString()).toBe(6);
  });

  test('sum(5)(-1)(2) equal 6', () => {
    expect(sum(5)(-1)(2).toString()).toBe(6);
  });

  test('sum(6)(-1)(-2)(-3) equal 0', () => {
    expect(sum(6)(-1)(-2)(-3).toString()).toBe(0);
  });

  test('sum(0)(1)(2)(3)(4)(5) equal 15', () => {
    expect(sum(0)(1)(2)(3)(4)(5).toString()).toBe(15);
  });
});
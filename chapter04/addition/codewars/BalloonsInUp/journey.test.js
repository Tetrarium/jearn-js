import { Journey } from './journey';

describe('Тест Journey', () => {
  const letter = { weight: 0.004536 };
  const house = { weight: 45000 };
  const pushCart = { weight: 95 };
  const lawnChair = { weight: 5 };

  test.each([
    [pushCart, 0, 50, false],
    [letter, 0, 1, true],
    [house, 2, 20622, false],
    [house, 2, 9500000, true],
    [pushCart, 0, 20622, true],
    [lawnChair, 1, 45, false],
    [lawnChair, 1, 1000, false],
    [lawnChair, 1, 18000, true],
  ])('c аргументами %o, %i, %i. isPossible() вернет %s', (obj, crew, balloons, expected) => {
    const instance = new Journey(obj, crew, balloons);
    expect(instance.isPossible()).toBe(expected);
  });
});

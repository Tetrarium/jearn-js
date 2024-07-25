import { spy } from "../tasks";

describe('test spy', () => {
  test('записывает вызовы в своё свойство', () => {
    function work() {}

    work = spy(work);

    expect(work.calls).toEqual([]);

    work(1, 2);

    expect(work.calls).toEqual([[1, 2]]);

    work(3, 4);

    expect(work.calls).toEqual([
      [1, 2],
      [3, 4],
    ])
  });

  test('Прозрачно оборачивает функции', () => {
    const sum = spy((a, b) => a + b);

    expect(sum(1, 2)).toBe(3);
  });

  test('Прозрачно оборачивает методы', () => {
    const calc = {
      sum(a, b) {
        return a + b;
      }
    }

    calc.sum = spy(calc.sum);
    expect(calc.sum(1, 2)).toBe(3);
  });
});

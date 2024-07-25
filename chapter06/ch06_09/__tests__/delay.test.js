import { delay } from "../tasks";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('test delay', () => {
  test('вызывает функцию после указанного таймаута', () => {
    const callback = jest.fn();

    const f1000 = delay(callback, 1000);

    expect(callback).not.toHaveBeenCalled();

    f1000();

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  test('Передает аргументы и this', () => {
    const start = Date.now();
    const user = {
      sayHi(phrase, who) {
        expect(this).toEqual(user);
        expect(phrase).toBe('Hello');
        expect(who).toBe('John');
        expect(Date.now() - start).toBe(1500);
      }
    }

    user.sayHi = delay(user.sayHi, 1500);

    user.sayHi('Hello', 'John');
    jest.runAllTimers();
  });
})
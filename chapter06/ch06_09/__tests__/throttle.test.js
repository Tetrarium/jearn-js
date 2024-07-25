import { throttle } from "../tasks";

describe('test throttle', () => {
  let fn;
  let throttled;

  beforeAll(() => {
    jest.useFakeTimers();

    fn = jest.fn();
    throttled = throttle(fn, 1000);
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  
  test('1-й вызов происходит немедленно', () => {
    throttled(1);
    expect(fn).toHaveBeenCalledWith(1);
  });

  test('1-й вызов происходит, далее вызовы игнорируются до истечения 1000 мс от последнего вызова', () => {
    jest.advanceTimersByTime(500);
    throttled(2);
    expect(fn).not.toHaveBeenCalledWith(2);
    expect(fn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(300);
    throttled(3);
    expect(fn).not.toHaveBeenCalledWith(3);
    expect(fn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledWith(3);
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('3-й вызов ждет 1000 мс от 2-го', () => {
    jest.advanceTimersByTime(100);
    throttled(4);
    expect(fn).not.toHaveBeenCalledWith(4);
    expect(fn).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    throttled(5);
    expect(fn).not.toHaveBeenCalledWith(5);
    expect(fn).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(700);
    throttled(6);
    expect(fn).not.toHaveBeenCalledWith(6);
    expect(fn).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith(6);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
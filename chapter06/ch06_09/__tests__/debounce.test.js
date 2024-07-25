import { debounce } from "../tasks";

describe('test debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  })

  test('для одного вызова - запускается через "ms" миллисекунд', () => {
    const f = jest.fn();
    const debounced = debounce(f, 1000);

    debounced('test');
    expect(f).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(f).toHaveBeenCalled();
  })

  test('для 3 вызовов - вызывает последний через "ms" миллисекунд', () => {
    const f = jest.fn();

    const debounced = debounce(f, 1000);

    debounced('a');

    jest.advanceTimersByTime(200);
    expect(f).not.toHaveBeenCalled();

    debounced('b');
    jest.advanceTimersByTime(500);
    expect(f).not.toHaveBeenCalled();

    debounced('c');
    jest.advanceTimersByTime(900);
    expect(f).not.toHaveBeenCalled();
    
    jest.advanceTimersByTime(100);
    expect(f).toHaveBeenCalledTimes(1);
    expect(f).toHaveBeenCalledWith('c');
  });

  test('сохраняет контекст вызова', () => {
    const obj = {
      f() {
        expect(this).toEqual(obj);
      }
    };

    obj.f = debounce(obj.f, 1000);

    obj.f();
    jest.runAllTimers();
  });
});

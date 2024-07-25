// 1. Декоратор-шпион
// https://learn.javascript.ru/call-apply-decorators#dekorator-shpion

export function spy(func) {
  
  function fn(...args) {
    fn.calls.push(args)

    return func.apply(this, args)
  }
  fn.calls = [];
  return fn;
}


// 2. Задерживающий декоратор
// https://learn.javascript.ru/call-apply-decorators#zaderzhivayuschiy-dekorator
export function delay(f, ms) {
  return function() {
    setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  }
}


// 3. Декоратор debounce
// https://learn.javascript.ru/call-apply-decorators#dekorator-debounce
export function debounce(f, ms) {
  let timerId;
  
  return function () {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  };
}


// 4. Тормозящий (throttling) декоратор
// https://learn.javascript.ru/call-apply-decorators#tormozyaschiy-throttling-dekorator
export function throttle(f, ms) {
  let isEnable = true;
  let lastArgs = [];

  return function wrap(...args) {
    lastArgs = args;
    if (isEnable) {
      isEnable = false;
      f.apply(this, args);

      setTimeout(() => {
        isEnable = true;
        wrap(...lastArgs);
      }, ms);
    }
  }
}

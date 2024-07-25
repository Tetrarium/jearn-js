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
  
}

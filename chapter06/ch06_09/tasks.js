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


/**
 * https://www.codewars.com/kata/5a2cb53cee1aaef2fa000037/train/javascript
 * 
 * Создать функцию, которая не будет вызывать ошибок при следующих вызовах:
 * 
 *  - newFunction()
 *  - new newFunction()
 *  - new new newFunction()
 *  - new new new newFunction()
 */

export function newestFunction() {
  if (new.target) {
    return newestFunction;
  }
};


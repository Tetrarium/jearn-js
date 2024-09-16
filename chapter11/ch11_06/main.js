"use strict"
console.log('Chapter 11.6');

const example11_6_1 = () => {
  function loadScript(src, callback) {
    const script =document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  }

  const loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, script) => {
        if (err) reject(err)
        else resolve(script);
      });
    })
  }

  loadScriptPromise('./scripts/script.js')
    .then(console.log)
    .catch(console.log);
}
// example11_6_1();


const example11_6_2 = () => {
  function promisify(f) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function callback(err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }

        args.push(callback);

        f.call(this, ...args);
      })
    }
  }

  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error load script ${src}`));

    document.head.append(script);
  }

  const loadScriptPromise = promisify(loadScript);

  loadScriptPromise('./scripts/script.js')
    .then(console.log)
    .catch(console.log);
}
example11_6_2();


const example11_6_3 = () => {
  function promisify(f, manyArgs = false) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function callback(err, ...results) {
          if (err) {
            reject(err);
          } else {
            resolve(manyArgs ? results : results[0]);
          }
        }

        args.push(callback);

        f.call(this, ...args);
      })
    }
  }

  function loadScript(base, src, callback) {
    const script = document.createElement('script');
    script.src = base + src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error load ${base + url}`));

    document.head.append(script);
  }

  const promisifyLoadScript = promisify(loadScript, true);

  promisifyLoadScript('./scripts', '/script.js')
    .then(console.log)
    .catch(console.log);
}
example11_6_3();

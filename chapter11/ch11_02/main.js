"use strict"
console.log('Chapter 11.2');

const example11_2_1 = () => {
  const promise = new Promise(() => {});
  console.log(promise);
}
// example11_2_1();


const example11_2_2 = () => {
  const promise = new Promise((res) => {
    console.log('construct promise')
    setTimeout(() => res('done'), 3000);
  })

  console.log(promise);

  promise.then((res) => console.log(res)).then(() => console.log(promise));
}
// example11_2_2();


const example11_2_3 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => rej(new Error('Whoops')), 2000);
  });

  console.log(promise);

  promise.catch((r) => console.log(r)).finally(() => console.log(promise));
}
// example11_2_3();


const example11_2_4 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res('done'), 2000);
    setTimeout(() => rej('error'), 3000);
  });

  console.log(promise);
  promise
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log(promise))
}
// example11_2_4();


const example11_2_5 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res('done'), 3000);
    setTimeout(() => rej('error'), 2500);
  })

  const { log } = console

  log(promise);
  promise
    .then(log)
    .catch(log)
    .finally(() => log(promise));
}
// example11_2_5();


const example11_2_6 = () => {
  const promise = new Promise((res) => {
    res('done');
  })

  const anotherPromise = promise.then(() => 'done 2')

  console.log(promise);
  console.log(anotherPromise);

  console.log(promise === anotherPromise);
  console.log(promise);
  console.log(anotherPromise);
  setTimeout(() => console.log(anotherPromise));
}
// example11_2_6();


const example11_2_7 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res('done'), 1000);
  })

  console.log(promise);

  promise.then(
    console.log,
    console.log
  );
}
// example11_2_7();

const example11_2_8 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => rej('oops'), 1000);
  })

  console.log(promise);
  promise.then(
    null,
    console.log
  );
}
// example11_2_8();


const example11_2_9 = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => rej('oops'));
  });

  console.log(promise);

  promise.catch(console.log);
}
// example11_2_9();


const example11_2_10 = () => {
  new Promise((res, rej) => {
    setTimeout(() => res('done'), 2000);
    console.log(this);
  })
    .finally(() => console.log('Promise is fullfilled'))
    .then(console.log)
    .finally(function() {console.log(this)});
}
// example11_2_10();


const example11_2_11 = () => {
  new Promise((res, rej) => {
    throw new Error('error');
  })
    .finally(() => console.log('Promise is fullfilled'))
    .catch(console.log);
}
// example11_2_11();


const example11_2_12 = () => {
  function loadScript(src) {
    return new Promise((res, rej) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => res(script);
      script.onerror = () => rej(new Error('ErrorLoadScript'));

      document.head.append(script);
    });
  }

  const promise = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');

  promise
    .then(script => console.log(`${script.src} has been loaded!`))
    .then(() => loadScript('./script.js'))
    .catch(e => console.log(`Error: ${e.message}`));
}
// example11_2_12();

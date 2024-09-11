"use strict"
console.log('Chapter 11.1');

const example11_1_1 = () => {
  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }

  console.log('before load');
  loadScript('./scripts/script1.js');
  console.log('after load');
}
// example11_1_1();


const example11_1_2 = () => {
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  console.log('before load');

  loadScript('./scripts/script2.js', function() {
    showFromScript();
  });

  console.log('after load');
}
// example11_1_2();


const example11_1_3 = () => {
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  console.log('before');

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    console.log(`Здорово, скрипт ${script.src} загрузился`);
    console.log( _ );
  });

  console.log('after');
}
// example11_1_3();


const example11_1_4 = () => {
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }

  console.log('before');

  loadScript('./scripts/script1.js', function(script) {
    console.log(`Здорово, скрипт ${script.src} загрузился, загрузим еще один`);

    loadScript('./scripts/script2.js', function(script) {
      console.log(`Здорово, еще один скрипт ${script.src} загрузился`);

      showFromScript();
    });
  });

  console.log('after');
}
// example11_1_4();


const example11_1_5 = () => {
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
  }

  function cb(error, script) {
    if (error) {
      console.log(error);
    } else {
      console.log(script)
    }
  }

  loadScript('./script.js', cb);
  loadScript('./scripts/script1.js', cb);
}
example11_1_5();

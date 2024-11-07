console.log('Chapter 14.1');


const example14_1_1 = () => {
  const target = {};
  const proxy = new Proxy(target, {});
  
  proxy.test = 5;

  console.log(target);
  console.log(proxy);
  console.log(proxy.test);

  for (const key in proxy) {
    console.log(key);
  }
}
// example14_1_1();

const example14_1_2 = () => {
  let nums = [0, 1, 2];

  nums = new Proxy(nums, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return 0;
    }
  });

  console.log(nums[1]);
  console.log(nums[3]);
}
// example14_1_2();

const example14_1_3 = () => {
  let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
  }

  console.log(dictionary['Hello']);
  console.log(dictionary['Welcome']);

  dictionary = new Proxy(dictionary, {
    get(target, phrase) {
      if (phrase in target) {
        return target[phrase];
      }
      return phrase;
    }
  });
  console.log(dictionary['Hello']);
  console.log(dictionary['Welcome to Proxy']);
}
// example14_1_3();


const example14_1_4 = () => {
  let numbers = [];

  numbers = new Proxy(numbers, {
    set(target, prop, value) {
      if (typeof value === "number") {
        target[prop] = value;
        return true;
      }
      return false;
    }
  });

  numbers.push(1);
  numbers.push(2);
  console.log(numbers[0]);
  numbers.push('3')

  console.log(numbers);
}
// example14_1_4();


const example14_1_5 = () => {
  let user = {
    name: 'Vasya',
    age: 30,
    _password: "***"
  };

  user = new Proxy(user, {
    ownKeys(target) {
      return Object.keys(target).filter(key => !key.startsWith('_'));
    }
  });

  for (const key in user) {
    console.log(key);
  }

  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(user);
}
// example14_1_5();


const example14_1_6 = () => {
  const obj = new Proxy({
    a: 'a',
    b: 'b'
  }, {
    ownKeys(target) {
      return ['b', 'c'];
    }
  })

  console.log(Object.keys(obj));

  console.log(obj.a);
}
// example14_1_6();

const example14_1_7 = () => {
  const user = new Proxy({}, {
    ownKeys(target) {
      return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) {
      console.log(target);
      console.log(prop);
      return {
        enumerable: true,
        configurable: true,
      }
    }
  })

  console.log( Object.keys(user) );
  console.log(Object.values(user));
}
// example14_1_7();


const example14_1_8 = () => {
  const user = new Proxy(
    {
      name: 'Vasya',
      _password: "***",
      checkPassword(value) {
        return value === this._password;
      }
    }, {
      get(target, prop) {
        if (prop.startsWith('_')) {
          throw new Error('Permission denied');
        }

        const value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value;
      },
      set(target, prop, value) {
        if (prop.startsWith('_')) {
          throw new Error('Permission denied');
        }

        target[prop] = value;
        return true;
      },
      deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
          throw new Error('Permission denied');
        }
        delete target[prop];
        return true;
      },
      ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
      }
    }
  );

  try {
    console.log(user._password);
  } catch (e) {
    console.log(e);
  }

  try {
    user._password = 'test';
  } catch(e) {
    console.log(e);
  }

  try {
    delete user._password;
  } catch (e) {
    console.log(e);
  }

  for (const key in user) {
    console.log(key);
  }

  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));

  console.log(user.checkPassword('***'));
  console.log(user.checkPassword('**'));
  console.log(user);
}
// example14_1_8();


const example14_1_9 = () => {
  const range = new Proxy({
    from: 1,
    to: 10,
  }, {
    has(target, prop) {
      return prop >= target.from && prop <= target.to;
    }
  });

  console.log(5 in range);
  console.log(11 in range);
}
// example14_1_9();


const example14_1_10 = () => {
  function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    }
  }

  function sayHello(user) {
    console.log(`Hello, ${user}`);
  }

  console.log(sayHello.length);
  console.log(sayHello.name);

  sayHello = delay(sayHello, 3000);

  console.log(sayHello.length);
  console.log(sayHello.name);

  sayHello('Vasya');
}
// example14_1_10();


const example14_1_11 = () => {
  function delay(f, ms) {
    return new Proxy(f, {
      apply(target, thisArg, args) {
        setTimeout(() => target.apply(thisArg, args), ms);
      }
    })
  }

  function sayHi(user) {
    console.log(`Hi, ${user}`);
  }

  sayHi = delay(sayHi, 3000);
  sayHi('Vasya');
  console.log(sayHi.length);
  console.log(sayHi.name);
}
// example14_1_11();


const example14_1_12 = () => {
  const user = {};

  Reflect.set(user, 'name', 'Vasya');

  console.log(user);
}
// example14_1_12();


const example14_1_13 = () => {
  let user = {
    name: 'Vasya',
  }

  user = new Proxy(user, {
    get(target, prop, receiver) {
      console.log(receiver);
      console.log(`GET ${prop}`);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, val, receiver) {
      console.log(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver);
    }
  })

  const name = user.name;
  console.log(name);

  user.name = "Petya";
}
// example14_1_13();


const example14_1_14 = () => {
  const user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  }

  const userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop];
    }
  });

  console.log(userProxy.name);
}
// example14_1_14();

const example14_1_15 = () => {
  const user = {
    _name: 'Guest',
    get name() {
      return this._name;
    }
  }

  const userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    }
  });

  const admin = {
    __proto__: userProxy,
    _name: 'Admin',
  }

  console.log(admin.name);
}
// example14_1_15()

// tasks

const task1 = () => {
  // Ошибка при чтении несуществующего свойства
  // https://learn.javascript.ru/proxy#tasks
  let user = {
    name: "John",
  }

  function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (!(prop in target)) {
          throw new Error(`${prop} doesn't exist`);
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }

  user = wrap(user);

  console.log(user.name);
  console.log(user.age);
}
// task1();


const task2 = () => {
  // Получение элемента массива с отрицательной позиции
  let array = [1, 2, 3]

  array = new Proxy(array, {
    get(target, prop, receiver) {
      let index = prop < 0
        ? target.length + +prop
        : prop;

      return Reflect.get(target, index, receiver);
    }
  });

  console.log( array[-1] );
  console.log( array[-2] );
}
// task2();


const task3 = () => {
  function makeObservable(target) {
    /* */
    const handlers = Symbol('hundlers');

    const newTarget = {
      ...target,
      [handlers]: [],
      observe(fn) {
        this[handlers].push(fn);
      }
    }
    return new Proxy(newTarget, {
      set(target, prop, value, receiver) {
        const success = Reflect.set(target, prop, value, receiver);
        if (success) {
          target[handlers].forEach(handler => handler(prop, value));
        }
        return success;
      }
    })
  }

  let user = {};
  user = makeObservable(user);

  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });

  user.observe((key, val) => console.log(`another set ${key}: ${val}`));

  user.name = 'John';
  user.age = 25;
}
// task3();


/** Задачи от ChatGPT */
const gpt1 = () => {
  // Логгер доступа к свойствам

  // Создайте объект Proxy, который будет логировать доступ к его свойствам в консоль.
  // При каждом чтении или записи значения должно выводиться сообщение
  // с названием свойства и его новым значением (при записи).

  function createLoggingProxy(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        console.log(`Чтение свойства: ${prop}`)
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        console.log(`Запись свойства: ${prop} = ${value}`);
        return Reflect.set(target, prop, value, receiver)
      }
    });
  }

  const obj = { name: 'Alice', age: 25 };
  const proxy = createLoggingProxy(obj);

  console.log(proxy.name); // Должно вывести: "Чтение свойства: name"
  proxy.age = 26;          // Должно вывести: "Запись свойства: age = 26"
}
// gpt1();


const gpt2 = () => {
  // Задача 2: Запрет на изменение объекта
  // Создайте Proxy, который будет запрещать добавление,
  // удаление и изменение свойств у переданного объекта.
  // Если кто-то попытается изменить объект, выбросите ошибку.

  function createImmutableProxy(target) {
    return new Proxy(target, {
      set() {
        throw new Error('Changing properties is forbidden');
      },
      deleteProperty() {
        throw new Error('Deleting properties is forbidden')
      }
    });
  }

  const obj = { name: 'Alice' };
  const proxy = createImmutableProxy(obj);

  try {
    proxy.name = 'Bob'; // Должно выдать ошибку
  } catch(e) { console.log(e) }

  try {
    delete proxy.name;  // Должно выдать ошибку
  } catch(e) { console.log(e) }

  try {
    proxy.age = 30;     // Должно выдать ошибку
  } catch(e) { console.log(e) }
}
// gpt2();


const gpt3 = () => {
  // Валидация свойств

  // Создайте Proxy, который будет валидировать значения свойств перед установкой.
  // Например, если свойство — age, его значение должно быть числом больше 0 и меньше 150.
  // Если значение не проходит проверку, выбросите ошибку.

  function createValidatedProxy(target) {
    return new Proxy(target, {
      set(target, prop, value, receiver) {
        if ((prop === "age") && (value <= 0 || value >= 150)) {
          throw new Error('Возраст должен быть между 0 и 150');
        }
        
        return Reflect.set(target, prop, value, receiver);
      }
    });
  }

  const person = { name: 'Alice', age: 25 };
  const proxy = createValidatedProxy(person);

  try {
    proxy.age = 200; // Ошибка: Возраст должен быть между 0 и 150
  } catch(e) { console.log(e) }

  try {
    proxy.age = -5;  // Ошибка: Возраст должен быть между 0 и 150
  } catch(e) { console.log(e) }

  proxy.age = 30;  // Значение обновляется без ошибок
}
// gpt3();


const gpt4 = () => {
  // Отложенная инициализация

  // Создайте Proxy, который будет откладывать инициализацию некоторых свойств объекта.
  // Если свойство запрашивается впервые, оно инициализируется значением по умолчанию.
  // Например, если свойство name отсутствует, оно инициализируется строкой "Неизвестно".

  function createLazyInitializationProxy() {
    /* ToDo */
  }

  const person = {};
  const proxy = createLazyInitializationProxy(person);

  console.log(proxy.name); // Должно вернуть "Неизвестно"
  console.log(proxy.age);  // Должно вернуть "Неизвестно"
}
// gpt4();


const gpt5 = () => {
  // Подсчет доступа к свойствам

  // Создайте Proxy, который будет считать,
  // сколько раз было прочитано каждое свойство объекта.
  // Храните это количество в отдельном объекте.

  function createAccessCountingProxy() {
    /* ToDo */
  }

  const obj = { name: 'Alice', age: 25 };
  const { proxy, accessCount } = createAccessCountingProxy(obj);

  console.log(proxy.name); // "Alice"
  console.log(proxy.name); // "Alice"
  console.log(accessCount.name); // Должно вывести 2
  console.log(accessCount.age);  // Должно вывести 0
}
// gpt5();

const gpt6 = () => {
  // Ограничение на количество вызовов метода

  // Создайте Proxy, который ограничивает количество вызовов метода объекта.
  // Если метод вызывается больше допустимого количества раз, выбросите ошибку.

  function createLimitedCallsProxy() {
    /* ToDo */
  }

  const obj = {
    greet() {
      console.log("Hello!");
    }
  };
  const proxy = createLimitedCallsProxy(obj, 'greet', 3);
  
  proxy.greet(); // "Hello!"
  proxy.greet(); // "Hello!"
  proxy.greet(); // "Hello!"
  proxy.greet(); // Ошибка: Метод greet вызван слишком много раз
  
}
// gpt6();

/**
 * 4.1 Объекты
 */

function log(title, expression) {
  console.log('');
  console.log('^^^^');
  console.log(`${title}: `);
  console.log(expression);
  console.log('$$$$');
}

/** Копирование объектов */

// const user = {
//   name: 'John',
// };
// console.log('user: ');
// console.log(user);

// const admin = user;
// console.log('admin: ');
// console.log(admin);

// admin.name = 'Pete';
// console.log('user после изменения name у admin');
// console.log(user);

// console.log('admin === user');
// console.log(admin === user);

/** Клонирование объектов */

// const user = {
//   name: 'John',
//   age: 30,
// };

// const clone = {};

// for (let key in user) {
//   clone[key] = user[key];
// }

// log('user', user);
// log('clone', clone);
// log('clone == user', clone == user);

// // Перезапись скопированного имени свойства

// const clone2 = {
//   name: 'Pete',
// };
// log('origin clone2', clone2);
// Object.assign(clone2, user);
// log('copied clone2', clone2);

// const user = {
//   name: 'John',
// };

// const permission1 = { canView: true };
// const permission2 = { canEdit: true };
// log('origin user', user);
// Object.assign(user, permission1, permission2);
// log('union user', user);


// Копирование вложенных объектов
const user = {
  name: 'John',
  skills: {
    languages: ['Russian', 'English'],
    programming: ['JS', 'TS', 'HTML'],
  }
};

const copiedUser = Object.assign({}, user);
log('copiedUser === user', copiedUser === user);
log('copiedUser.skills === user.skills', copiedUser.skills === user.skills); // true
// Копирование происходит поверхностно, те есть, если
// значением свойств будут объекты, эти объекты будут одними и теми же
// как в источнике, так и в приемнике

// Копирование через rest оператор

const copied2 = { ...user };
log('copied2', copied2);
log('copied2 === user', copied2 === user);
log('copied2.skills === user.skills', copied2.skills === user.skills);
// При rest - копирование в свойствах так же копируетсяссылка на объект


log('typeof Function', typeof (() => { }));
log('typeof {}', typeof {});

function deepCopy(obj) {
  const copiedObj = {};

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'object' && !Array.isArray(value)) {
      copiedObj[key] = deepCopy(value);
    } else {
      copiedObj[key] = value;
    }
  }

  return copiedObj;
};

const deepCopyUser = deepCopy(user);

log('deepCopyUser', deepCopyUser);
log('deepCopyUser === user', deepCopyUser === user);
log('deepCopyUser.skills === user.skills', deepCopyUser.skills === user.skills);
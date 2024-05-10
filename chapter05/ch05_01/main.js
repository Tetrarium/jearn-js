// 'use strict';

const str = 'Hello!';

str.test = 5; // TypeError when 'use strict'

console.log(str);
console.log(str.test);
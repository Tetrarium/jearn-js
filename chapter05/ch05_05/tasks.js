'use strict';

export function camelize(str) {
  return str
    .split('-')
    .reduce((result, substr) => result + substr[0].toUpperCase() + substr.slice(1));
}
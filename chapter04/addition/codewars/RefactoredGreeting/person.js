function greet(myName, yourName) {
  return `Привет ${yourName}, меня зовут ${myName}`;
}

export function Person(name) {
  this.name = name;

  this.greet = function (yourName) {
    return greet(this.name, yourName);
  };
}

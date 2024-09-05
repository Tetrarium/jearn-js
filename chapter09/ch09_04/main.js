"use strict"
console.log("Chapter 9.4");

const example9_4_1 = () => {
  class CoffeeMachine {
    #waterAmount = 0;

    #waterLimit = 200;

    constructor(power) {
      this._power = power;
    }

    get waterAmount() {
      return this.#waterAmount;
    }

    set waterAmount(value) {
      if (value < 0) throw new Error('Отрицательное количество воды');
      this.#waterAmount = value;
    }

    get power() {
      return this._power;
    }

    #checkWater(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }

  }

  const coffeeMachine = new CoffeeMachine(100);

  coffeeMachine.waterAmount = 10;

  console.log(coffeeMachine);

  console.log(`Мощность: ${coffeeMachine.power}W`);

  console.log(coffeeMachine.waterAmount)
}
example9_4_1();
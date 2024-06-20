import { withdraw } from "../tasks";

describe('test withdraw function', () => {
  let atm;
  beforeAll(() => {
    atm = {
      100: 10,
      50: 20,
      20: 30,
      10: 50,
    };
  });

  test.each([
    [
      275,
      'Ошибка: Недостаточно средств или невозможно выдать запрашиваемую сумму.',
      {
        100: 10,
        50: 20,
        20: 30,
        10: 50,
      },
    ],
    [
      270,
      { 100: 2, 50: 1, 20: 1 },
      {
        100: 8,
        50: 19,
        20: 29,
        10: 50,
      },
    ],
    [
      1500,
      { 100: 8, 50: 14 },
      {
        50: 5,
        20: 29,
        10: 50,
      },
    ],
    [
      1000,
      { 50: 5, 20: 29, 10: 17 },
      {
        10: 33,
      },
    ],
    [
      500,
      'Ошибка: Недостаточно средств или невозможно выдать запрашиваемую сумму.',
      {
        10: 33,
      },
    ]
  ])('call with %p must return %p, remainder %p', (arg, res, remainder) => {
    const issue = withdraw(atm, arg);

    expect(issue).toEqual(res);
    expect(atm).toEqual(remainder);

  });
});
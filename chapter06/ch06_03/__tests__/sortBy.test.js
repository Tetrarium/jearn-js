import { byField } from "../tasks";

describe('test byField', () => {
  let users;

  beforeEach(() => {
    users = [
      { name: "Иван", age: 20, surname: "Иванов" },
      { name: "Пётр", age: 18, surname: "Петров" },
      { name: "Анна", age: 19, surname: "Каренина" },
    ];
  })

  test.each([
    [
      'name',
      [
        { name: "Анна", age: 19, surname: "Каренина" },
        { name: "Иван", age: 20, surname: "Иванов" },
        { name: "Пётр", age: 18, surname: "Петров" },
      ],
    ],
    [
      'age',
      [
        { name: "Пётр", age: 18, surname: "Петров" },
        { name: "Анна", age: 19, surname: "Каренина" },
        { name: "Иван", age: 20, surname: "Иванов" },
      ],
    ],
    [
      'surname',
      [
        { name: "Иван", age: 20, surname: "Иванов" },
        { name: "Анна", age: 19, surname: "Каренина" },
        { name: "Пётр", age: 18, surname: "Петров" },
      ]
    ]
  ])('with %s returns %o', (field, expected) => {
    users.sort(byField(field));
    expect(users).toEqual(expected);
  });
});
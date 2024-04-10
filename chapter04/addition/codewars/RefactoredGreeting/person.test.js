import { Person } from './person';

describe('Проверка конструктора Person', () => {
  const vasya = new Person('Вася');
  const olya = new Person('Оля');

  test('Проверка создания экземпляра с именем Вася', () => {
    expect(vasya.name).toBe('Вася');
  });

  test('Проверка создания экземпляра с имененм Оля', () => {
    expect(olya.name).toBe('Оля');
  });

  test('Вася приветствует Олю', () => {
    expect(vasya.greet(olya.name)).toBe('Привет Оля, меня зовут Вася');
  });

  test('Оля приветствует Васю', () => {
    expect(olya.greet(vasya.name)).toBe('Привет Вася, меня зовут Оля');
  });
});

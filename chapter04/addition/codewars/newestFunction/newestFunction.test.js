import { newestFunction } from "./newestFunction";

describe('Тест newestFunction', () => {
  test('Является функцией', () => {
    expect(newestFunction).toBeInstanceOf(Function);
  });

  test('Можно вызывать как обычную функцию', () => {
    expect(() => newestFunction()).not.toThrow();
  });

  test('Можно вызвать с оператором new', () => {
    expect(() => new newestFunction()).not.toThrow();
  });

  test('Можно вызывать с двумя операторами new', () => {
    expect(() => new new newestFunction()).not.toThrow();
  });

  test('Можно вызывать с тремя операторами new', () => {
    expect(() => new new new newestFunction()).not.toThrow();
  });

  test('Можно вызывать с тремя операторами new', () => {
    expect(() => new new new new newestFunction()).not.toThrow();
  });
});
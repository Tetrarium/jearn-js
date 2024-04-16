import Vector from './vector';

test('При вызове конструктора Vector без параметров создается нулевой вектор', () => {
  const vector = new Vector();

  expect(vector.x).toBe(0);
  expect(vector.y).toBe(0);
});

describe('test new Vector(3, 4)', () => {
  let vector;
  beforeEach(() => {
    vector = new Vector(3, 4);
  });

  afterEach(() => {
    vector = null;
  });

  test('имеет x равный 3', () => {
    expect(vector.x).toBe(3);
  });

  test('имеет y равный 4', () => {
    expect(vector.y).toBe(4);
  });

  test('имеет метод add(v)', () => {
    expect(vector.add).toBeInstanceOf(Function);
  });

  test('метод add возвращает объект Vector', () => {
    expect(vector.add(new Vector())).toBe(vector);
  });

  test('метод add(v) корректно суммирует вектора', () => {
    vector.add(new Vector(1, 2));
    expect(vector.x).toBe(4);
    expect(vector.y).toBe(6);
  });

  test('метод add без аргументов выбросит ошибку', () => {
    expect(() => vector.add()).toThrow('Error! Требутся аргумент Vector');
  });

  test('метод add() с аргументом не Vector выбросит ошибку', () => {
    expect(() => vector.add('any')).toThrow('Error! Аргумент не Vector');
  });

  test('метод getLength вернет длину вектора', () => {
    expect(vector.getLength()).toBeCloseTo(5, 5);
  });
});
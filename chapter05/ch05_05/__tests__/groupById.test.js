import { groupById } from "../tasks";

describe('groupById', () => {
  test('creates an object grouped by id', () => {
    const users = [
      { id: 'john', name: "John Smith", age: 20 },
      { id: 'ann', name: "Ann Smith", age: 24 },
      { id: 'pete', name: "Pete Peterson", age: 31 },
    ];

    const result = {
      john: { id: 'john', name: "John Smith", age: 20 },
      ann: { id: 'ann', name: "Ann Smith", age: 24 },
      pete: { id: 'pete', name: "Pete Peterson", age: 31 },
    };

    expect(groupById(users)).toEqual(result);
  });

  test('works with an empty array', () => {
    expect(groupById([])).toEqual({});
  });
});

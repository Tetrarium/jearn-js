import { makeArmy } from "../tasks"

describe('makeArmy', () => {
  let army;

  beforeAll(() => {
    army = makeArmy();
  });

  test('army[0]() returns 0', () => {
    expect(army[0]()).toBe(0);
  })

  test('army[5]() returns 5', () => {
    expect(army[5]()).toBe(5);
  })

  test('army[9]() returns 9', () => {
    expect(army[9]()).toBe(9);
  })
});

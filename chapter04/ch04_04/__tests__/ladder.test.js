const { ladder } = require('../tasks');
global.alert = jest.fn();

describe('test ladder', () => {
  beforeEach(() => {
    ladder.step = 0;
  });

  test('up() должен возвращать this', () => {
    expect(ladder.up()).toEqual(ladder);
  });

  test('down() должен возвращать this', () => {
    expect(ladder.down()).toEqual(ladder);
  });

  test('showStep() должен вызывать alert', () => {
    ladder.showStep();
    expect(global.alert).toHaveBeenCalledWith(0);
  });

  test('up() должен увеличивать ступеньку', () => {
    expect(ladder.up().up().step).toBe(2);
  });

  test('down() должен уменьшать ступеньку', () => {
    expect(ladder.down().step).toBe(-1);
  });

  test('down().up().up().up()', () => {
    expect(ladder.down().up().up().up().step).toBe(2);
  });

  test('showStep() должен возвращать this', () => {
    expect(ladder.showStep()).toEqual(ladder);
  });

  test('up().up().down().showStep().down().showStep()', () => {
    expect(
      ladder
        .up()
        .up()
        .down()
        .showStep()
        .down()
        .showStep()
        .step
    ).toBe(0);
  });
});

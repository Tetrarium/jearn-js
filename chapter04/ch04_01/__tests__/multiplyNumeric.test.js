const { multiplyNumeric } = require("../task");

describe('test multiplyNumeric', () => {
  const menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };

  test('first call', () => {
    multiplyNumeric(menu);
    expect(menu).toEqual({
      width: 400,
      height: 600,
      title: "My menu",
    });
  });

  test('second call', () => {
    multiplyNumeric(menu);
    expect(menu).toEqual({
      width: 800,
      height: 1200,
      title: "My menu",
    });
  });

  test('third call', () => {
    multiplyNumeric(menu);
    expect(menu).toEqual({
      width: 1600,
      height: 2400,
      title: "My menu",
    });
  });

  test('return nothing', () => {
    expect(multiplyNumeric(menu)).toBeUndefined();
  });
});
const { isEmpty } = require("../task");

describe.each([
  [{}, true],
  [{ name: 'asdf' }, false],
])(('isEmpty(%o)'), (obj, expected) => {
  test(`returns ${expected}`, () => {
    expect(isEmpty(obj)).toBe(expected);
  });
});
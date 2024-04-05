const { getAmountSalaries } = require("../task");

describe.each([
  [
    {},
    0,
  ],
  [
    {
      Ann: 290,
    },
    290,
  ],
  [
    {
      John: 100,
      Ann: 160,
      Pete: 130,
    },
    390,
  ],
  [
    {
      John: 250,
      Ann: 390,
      Pete: 245,
      Vasya: 555,
      Katya: 298,
    },
    1738,
  ],
])(('isEmpty(%o)'), (obj, expected) => {
  test(`returns ${expected}`, () => {
    expect(getAmountSalaries(obj)).toBe(expected);
  });
});

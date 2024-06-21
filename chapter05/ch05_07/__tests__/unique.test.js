import { unique } from "../tasks";

describe('test unique', () => {
  let strings;
  beforeAll(() => {
    strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
  });

  test('removes non-unique elements', () => {
    expect(unique(strings)).toEqual(["Hare", "Krishna", ":-O"]);
  });

  test('does not change the source array', () => {
    expect(strings).toEqual(["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ]);
  });
});

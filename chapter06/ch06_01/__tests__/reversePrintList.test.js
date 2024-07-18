import { iterativeReversePrintList, recursiveReversePrintList } from "../tasks";
// global.alert = jest.fn();

describe.each([
  iterativeReversePrintList,
  recursiveReversePrintList,
])('test $name', (fn) => {
  let list;
  beforeAll(() => {
    list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
  });
  beforeEach(() => {
    global.alert = jest.fn();
  });

  test(`${fn.name} should be show each value`, () => {
    fn(list);
    expect(global.alert).toHaveBeenCalledWith(4);
    expect(global.alert).toHaveBeenCalledWith(3);
    expect(global.alert).toHaveBeenCalledWith(2);
    expect(global.alert).toHaveBeenCalledWith(1);
    expect(global.alert).toHaveBeenCalledTimes(4);
  })
});
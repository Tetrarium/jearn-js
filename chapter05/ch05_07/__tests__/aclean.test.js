import { aclean } from "../tasks";

function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

describe('aclean', () => {
  test('returns exactly 1 word from each anagram set', () => {
    const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    const result = aclean(arr);

    expect(result.length).toBe(3);

    expect(intersection(result, ['nap', 'PAN']).length).toBe(1);
    expect(intersection(result, ["teachers", "cheaters", "hectares"]).length).toBe(1);
    expect(intersection(result, ['ear', 'era']).length).toBe(1);
  });

  test('is case-insensitive', () => {
    const arr = ["era", "EAR"];

    expect(aclean(arr).length).toBe(1);
  });
});
import { toUpperString } from "../LC_24.05";

describe('test toUpperString', () => {
  test.each([
    ['what-a-nice-day-today', 'whatANiceDayToday'],
    ['What_a_nice_day_today', 'WhatANiceDayToday'],
    ['what_a_nice-day_today', 'whatANiceDayToday']
  ])('%s to equal %s', (arg, expected) => {
    expect(toUpperString(arg)).toBe(expected);
  });
});
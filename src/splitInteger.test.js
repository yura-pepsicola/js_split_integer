'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(120, 3)).toEqual([40, 40, 40]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(12, 1)).toEqual([12]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 3)).toEqual([3, 3, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5)).toEqual([0, 0, 1, 1, 1]);
});

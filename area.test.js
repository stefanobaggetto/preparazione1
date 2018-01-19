const getArea = require('./area');

var l = [1 , 2];

test('valida 1,2', () => {
  expect(getArea(l)).toBe(2);
});

l = [0 , 0];
test('valida 0, 0', () => {
  expect(getArea(l)).toBe(0);
});

l = [0 , 1];
test('valida 0, 1', () => {
  expect(getArea(l)).toBe(0);
});

l = [1 , -2];

test('invalida 1,-2', () => {
  expect(getArea(l)).toBe(-1);
});

test('invalida 0,0', () => {
  expect(getArea(0,0)).toBe(-1);
});

test('invalida -1,-1', () => {
  expect(getArea(-1,-1)).toBe(-1);
});

test('invalida "a","b"', () => {
  expect(getArea("a","b")).toBe(-1);
});

test('invalida 1', () => {
  expect(getArea(1).toBe(-1);
});

test('invalida vuoto', () => {
  expect(getArea()).toBe(-1);
});

test('invalida non stringa non numeri', () => {
  expect(getArea(t[2,3])).toBe(-1);
});

l = [0 , 0, 7];

test('invalida 0, 0, 7', () => {
  expect(getArea(l)).toBe(0);
});





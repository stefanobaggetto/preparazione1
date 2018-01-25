const getArea = require('./area');

//TESTS
var arrTest1 = [1 , 2];

test('valida 1,2', () => {
  expect(getArea(arrTest1)).toBe(2);
});

var arrTest2 = [0 , 0];
test('valida 0, 0', () => {
  expect(getArea(arrTest2)).toBe(0);
});

var arrTest3 = [0 , 1];
test('valida 0, 1', () => {
  expect(getArea(arrTest3)).toBe(0);
});

var arrTest4 = [1 , -2];

test('invalida 1,-2', () => {
  expect(getArea(arrTest4)).toBe(-1);
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

var vartest = 3;

test('invalida varibile singola', () => {
  expect(getArea(vartest)).toBe(-1);
});

var t = ["a", "b"];

test('invalida non stringa non numeri', () => {
  expect(getArea(t)).toBe(-1);
});

var arrTest5 = [0 , 2, 7];

test('valida 0, 2, 7', () => {
  expect(getArea(arrTest5)).toBe(0);
});

var arrTest6 = [0.1 , 2.7];

test('invalida float', () => {
  expect(getArea(arrTest6)).toBe(-1);
});

var arrTest7 = [1 , 2.7];

test('invalida 1 float', () => {
  expect(getArea(arrTest7)).toBe(-1);
});

var arrTest8 = ["a" , 2.7];

test('invalida una string e un float', () => {
  expect(getArea(arrTest8)).toBe(-1);
});

var arrTest9 = ["3" , "2"];

test('invalida stringhe con numeri', () => {
  expect(getArea(arrTest9)).toBe(-1);
});

var arrTest10 = {};
test('invalida oggetto', () => {
  expect(getArea(arrTest10)).toBe(-1);
});




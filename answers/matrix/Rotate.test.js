const rotate = require('./Rotate');

describe('rotate matrix in place', () => {
  test('2x2', () => {
    const test = [
      [4, 8],
      [3, 6]];
    rotate(test);
    expect(test).toEqual([
      [3, 4],
      [6, 8]]);
  });
  test('3x3', () => {
    const test = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]];
    rotate(test);
    expect(test).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]]);
  });
  test('4x4', () => {
    const test = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16]];
    rotate(test);
    expect(test).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11]]);
  });
  test('6x6', () => {
    const test = [
      [2, 29, 20, 26, 16, 28],
      [12, 27, 9, 25, 13, 21],
      [32, 33, 32, 2, 28, 14],
      [13, 14, 32, 27, 22, 26],
      [33, 1, 20, 7, 21, 7],
      [4, 24, 1, 6, 32, 34]];
    rotate(test);
    expect(test).toEqual([
      [4, 33, 13, 32, 12, 2],
      [24, 1, 14, 33, 27, 29],
      [1, 20, 32, 32, 9, 20],
      [6, 7, 27, 2, 25, 26],
      [32, 21, 22, 28, 13, 16],
      [34, 7, 26, 14, 21, 28]]);
  });
});

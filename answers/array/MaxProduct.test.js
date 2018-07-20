const maxProduct = require('./MaxProduct');

describe('largest product subarray', () => {
  test('all positive', () => {
    expect(maxProduct([1, 2, 3, 4, 5])).toBe(120);
  });

  test('positives with zeroes', () => {
    expect(maxProduct([1, 2, 3, 0, 4, 5, 6])).toBe(120);
    expect(maxProduct([1, 2, 0, 3, 4, 0, 5, 6])).toBe(30);
  });

  test('with negatives', () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
    expect(maxProduct([-1, 2, -3])).toBe(6);
    expect(maxProduct([-1, -2, -3, -4])).toBe(24);
    expect(maxProduct([-1, -2, -3, -4, -5])).toBe(120);
  });

  test('negatives and zeroes', () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
    expect(maxProduct([0, 1, 2, -1, 2, 3, -2, 0, -4, 5, 0, -6, 7, -8])).toBe(336);
  });
});

const getSum = require('./GetSum');

test('input of 1 and 2 to equal 3', () => {
    expect(getSum(1,2)).toBe(3);
  });

test('input of 15 and 15 to equal 30', () => {
    expect(getSum(15,15)).toBe(30);
});
const maxProfit = require('./MaxProfit');

test('input of [7,1,5,3,6,4] to equal 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  });

test('input of [7,6,4,3,1] to equal 0', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
});
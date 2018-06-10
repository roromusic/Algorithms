const coinChange = require('./CoinChange');

test('input of [1, 2, 5], 11 to equal 3', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
});

test('input of [2], 3 to equal -1', () => {
    expect(coinChange([2], 3)).toBe(-1);
});

test('input of [1], 1 to equal 1', () => {
    expect(coinChange([1], 1)).toBe(1);
});
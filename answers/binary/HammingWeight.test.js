const hammingWeight = require('./HammingWeight');

test('input of 11 to equal 3', () => {
    expect(hammingWeight(11)).toBe(3);
});

test('input of 128 to equal 1', () => {
    expect(hammingWeight(128)).toBe(1);
});

test('input of 0 to equal 0', () => {
    expect(hammingWeight(0)).toBe(0);
});

test('input of 1 to equal 1', () => {
    expect(hammingWeight(1)).toBe(1);
});

test('input of 2147483648 to equal 1', () => {
    expect(hammingWeight(2147483648)).toBe(1);
});
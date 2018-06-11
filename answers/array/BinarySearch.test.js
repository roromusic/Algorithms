const binarySearch = require('./BinarySearch');

test('input of [1, 2, 3, 4, 5, 6, 7, 8, 9], 8 to equal 7', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)).toBe(7);
});

test('input of [1, 5, 18, 30, 38, 45, 58, 79, 82, 88, 95, 120, 150, 175, 208], 1 to equal 0', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)).toBe(7);
});
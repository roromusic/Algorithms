const countingSort = require('./CountingSort');

test('array input with range of 1 - 30', () => {
    expect(countingSort([19,12,22,7,16,28,19,8,21,8,29,9,6,30,14,9,23,4,24,9,24,20,15,1,7,18,27,22,14,10],1,30)).toEqual([1, 4, 6, 7, 7, 8, 8, 9, 9, 9, 10, 12, 14, 14, 15, 16, 18, 19, 19, 20, 21, 22, 22, 23, 24, 24, 27, 28, 29, 30])
});
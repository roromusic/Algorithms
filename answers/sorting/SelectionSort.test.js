const selectionSort = require('./SelectionSort');

test('sort [5,9,4,3,8,2,6,7,1]', () => {
    expect(selectionSort([5,9,4,3,8,2,6,7,1])).toEqual([1,2,3,4,5,6,7,8,9]);
});

test('sort [5,9,4,3,1,2,8,2,6,9,7,1]', () => {
    expect(selectionSort([5,9,4,3,1,2,8,2,6,9,7,1])).toEqual([1,1,2,2,3,4,5,6,7,8,9,9]);
});
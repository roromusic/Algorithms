const insert = require('./Insert');

test('input of [[1,3],[6,9]], [2,5] to equal [[1,5],[6,9]]', () => {
    expect(insert([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
  });

test('input of [[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8] to equal [[1,2],[3,10],[12,16]]', () => {
    expect(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]]);
});

test('input of [[1,5],[6,8]], [5,6] to equal [[1,8]]', () => {
    expect(insert([[1,5],[6,8]], [5,6])).toEqual([[1,8]]);
});

test('input of [[0,2],[3,9]], [6,8] to equal [[0,2],[3,9]]', () => {
    expect(insert([[0,2],[3,9]], [6,8])).toEqual([[0,2],[3,9]]);
});

//single interval
test('input of [[1,2]], [2,5] to equal [1,5]', () => {
    expect(insert([[1,2]], [2,5])).toEqual([[1,5]]);
});

//non-overlapping intervals
test('input of [[1,5]], [0,0] to equal [[0,0],[1,5]]', () => {
    expect(insert([[1,5]], [0,0])).toEqual([[0,0],[1,5]]);
});

test('input of [[1,5]], [6,8] to equal [[1,5],[6,8]]', () => {
    expect(insert([[1,5]], [6,8])).toEqual([[1,5],[6,8]]);
});

test('input of [[1,3],[6,9]], [4,5] to equal [[1,3],[4,5],[6,9]]', () => {
    expect(insert([[1,3],[6,9]], [4,5])).toEqual([[1,3],[4,5],[6,9]]);
});

test('input of [[2,6],[7,9]], [15,18] to equal [[2,6],[7,9],[15,18]]', () => {
    expect(insert([[2,6],[7,9]], [15,18])).toEqual([[2,6],[7,9],[15,18]]);
});

//duplicate intervals
test('input of [[1,2],[3,5]], [1,2] to equal [[1,2], [3,5]]', () => {
    expect(insert([[1,2],[3,5]], [1,2])).toEqual([[1,2], [3,5]]);
});
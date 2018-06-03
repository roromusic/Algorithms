const setZeroes = require('./SetZeroes');

test('input of [[1,1,1],[1,0,1],[1,1,1]] to equal [[1,0,1],[0,0,0],[1,0,1]]', () => {
    let matrix = [[1,1,1],[1,0,1],[1,1,1]];
    setZeroes(matrix);
    expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
});

test('input of [[0,1,2,0],[3,4,5,2],[1,3,1,5]] to equal [[0,0,0,0],[0,4,5,0],[0,3,1,0]]', () => {
    let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
    setZeroes(matrix);
    expect(matrix).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);
});

test('input of [[1,1,1],[0,1,2]] to equal [[0,1,1],[0,0,0]]', () => {
    let matrix = [[1,1,1],[0,1,2]];
    setZeroes(matrix);
    expect(matrix).toEqual([[0,1,1],[0,0,0]]);
});
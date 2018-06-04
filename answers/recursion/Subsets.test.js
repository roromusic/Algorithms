const subsets = require('./Subsets');

test('input of [1,2,3] to equal [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]', () => {
    expect(subsets([1,2,3])).toEqual([[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]);
});
const merge = require('./Merge');

describe('Merge all overlapping intervals', () => {
    test('overlap exists', () => {
        expect(merge([[1,3],[8,10],[2,6],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
        expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);
    });

    test('single interval', () => {
        expect(merge([[1,2]])).toEqual([[1,2]]);
    });

    test('no overlaps', () => {
        expect(merge([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]]);
    });

    test('duplicate intervals', () => {
        expect(merge([[1,2],[1,2],[3,4],[3,4]])).toEqual([[1,2],[3,4]]);
    });

    test('interval consumed within another interval', () => {
        expect(merge([[1,6],[2,5],[3,4]])).toEqual([[1,6]]);
    });
})
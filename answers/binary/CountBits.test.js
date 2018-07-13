const countBits = require('./CountBits');

describe("Number of 1's in binary form", () => {
    test('0 - 10', () => {
        expect(countBits(0)).toEqual([0]);
        expect(countBits(1)).toEqual([0,1]);
        expect(countBits(2)).toEqual([0,1,1]);
        expect(countBits(3)).toEqual([0,1,1,2]);
        expect(countBits(4)).toEqual([0,1,1,2,1]);
        expect(countBits(5)).toEqual([0,1,1,2,1,2]);
        expect(countBits(6)).toEqual([0,1,1,2,1,2,2]);
        expect(countBits(7)).toEqual([0,1,1,2,1,2,2,3]);
        expect(countBits(8)).toEqual([0,1,1,2,1,2,2,3,1]);
        expect(countBits(9)).toEqual([0,1,1,2,1,2,2,3,1,2]);
        expect(countBits(10)).toEqual([0,1,1,2,1,2,2,3,1,2,2]);
    })
    test('100', () => {
        expect(countBits(100)).toEqual([0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,2,3,3,4,3]);
    })
})
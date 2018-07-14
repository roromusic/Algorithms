const combinationSum = require('./CombinationSum');

describe('possible combinations that add up to target', () => {
    test('no combination', () => {
        expect(combinationSum([9,2,4,5,6], 1)).toBe(0);
    })
    test('combinations exist', () => {
        expect(combinationSum([1,2,3], 4)).toBe(7);
    })
})
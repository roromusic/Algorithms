const maxSubArray = require('./MaxSubArray');

describe('Find subarray with largest sum', () => {
    test('one item', () => {
        expect(maxSubArray([0])).toBe(0);
        expect(maxSubArray([-9])).toBe(-9);
    })
    test('two items', () => {
        expect(maxSubArray([0,1])).toBe(1);
        expect(maxSubArray([0,-5])).toBe(0);
        expect(maxSubArray([-9,0])).toBe(0);
        expect(maxSubArray([5,5])).toBe(10);
    })
    test('multiple items', () => {
        expect(maxSubArray([5,6,8,9,7,4,5,8,9,6,2,1,5])).toBe(75);
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
        expect(maxSubArray([-9,1,9,7,-8,-6,4,-8,100,-59,60,-499])).toBe(101);
    })
})
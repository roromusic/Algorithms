const productExceptSelf = require('./ProductExceptSelf');

describe('Array of Product Except Self', () => {
    test('tests', () => {
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    })
})
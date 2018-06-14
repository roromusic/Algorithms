const lengthOfLIS = require('./LengthOfLIS');

test('input of [10,9,2,5,3,7,101,18] to equal 4', () => {
    expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4);
});

test('input of [10,9,2,5,3,7,101,18,0,1,2,3,4] to equal 5', () => {
    expect(lengthOfLIS([10,9,2,5,3,7,101,18,0,1,2,3,4])).toBe(5);
});
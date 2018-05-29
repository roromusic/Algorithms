const twoSum = require('./TwoSum');

test('array of [2,7,11,15] and target of 9 to equal [0,1]', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  });

test('array of [0,1,2,0] and target of 0 to equal [0,3]', () => {
    expect(twoSum([0,1,2,0], 0)).toEqual([0,3]);
});
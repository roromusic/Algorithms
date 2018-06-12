const containsDuplicate = require('./ContainsDuplicate');

test ('input of [1,2,3,1] equal true', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
});

test ('input of [1,2,3,4] equal false', () => {
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
});

test ('input of [1,1,1,3,3,4,3,2,4,2] equal true', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
});
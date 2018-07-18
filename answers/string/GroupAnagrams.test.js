const groupAnagrams = require('./GroupAnagrams');

describe('group anagrams together', () => {
    test('empty arr', () => {
        expect(groupAnagrams([])).toEqual([]);
    });
    test('one string', () => {
        expect(groupAnagrams(['hi'])).toEqual([['hi']]);
    })
    test('multiple strings', () => {
        expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]
    )
    })
});

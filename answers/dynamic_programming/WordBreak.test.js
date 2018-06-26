const wordBreak = require('./WordBreak');

describe('Determine if s can be segmented with words in dictionary', () => {
    test('true', () => {
        expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
        expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
    });

    test('false', () => {
        expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
    })
})
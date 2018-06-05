const longestSubstring = require('./LongestSubstring');

test('input of "abcabcbb" to equal 3', () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
});

test('input of "bbbbb" to equal 1', () => {
    expect(longestSubstring("bbbbb")).toBe(1);
});

test('input of "pwwkew" to equal 3', () => {
    expect(longestSubstring("pwwkew")).toBe(3);
});
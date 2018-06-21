const isAnagram = require('./IsAnagram');

describe('Is Valid Anagram', () => {
    test('true', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
        expect(isAnagram("dgqztusjuu", "dqugjzutsu")).toBe(true);
    });

    test('false', () => {
        expect(isAnagram("rat", "car")).toBe(false);
        expect(isAnagram("a", "")).toBe(false);
        expect(isAnagram("ac", "bb")).toBe(false);
    })
})
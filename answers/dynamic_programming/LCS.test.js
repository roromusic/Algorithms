const lcs = require('./LCS');

test('input of "AEDFHR", "ABCDGH" to equal 3', () => {
    expect(lcs("AEDFHR", "ABCDGH")).toBe(3);
});

test('input of "AGGTAB", "GXTXAYB" to equal 4', () => {
    expect(lcs("AGGTAB", "GXTXAYB")).toBe(4);
});

test('no common subsequence', () => {
    expect(lcs("ABC", "XYZ")).toBe(0);
})
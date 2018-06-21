const minWindow = require('./MinWindow');

describe('minimum window in substring', () => {
    test('minimum window does not exist', () => {
        expect(minWindow("ABCDEFGHIJKLMNOPQRSTUVW", "XYZ")).toBe("");
    })

    test('exact minimum window exists', () => {
        expect(minWindow("ABCDEFGHIJKXYZLMNOPQRSTUVW", "XYZ")).toBe("XYZ");
        expect(minWindow("ABCXYDEFGHIJKZXYZLMNOPQRSTUVW", "XYZ")).toBe("ZXY");
        expect(minWindow("ABCZDEXFGYHIXJKXYZLMNOPQRSTUVW", "XYZ")).toBe("XYZ");
        expect(minWindow("ABCDEFXGHIJYKLXMNOZPQYRSYTXUVWZYX", "XYZ")).toBe("ZYX");
    })

    test('minimum window exists', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
        expect(minWindow("AAOBECADENBAC", "ABC")).toBe("BAC");
    })
});
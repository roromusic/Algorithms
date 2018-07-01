const mySqrt = require('./mySqrt');

describe('square root of x', () => {
    test('number itself is square root', () => {
        expect(mySqrt(0)).toBe(0);
        expect(mySqrt(1)).toBe(1);
    })

    test('2-10', () => {
        expect(mySqrt(2)).toBe(1);
        expect(mySqrt(3)).toBe(1);
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(5)).toBe(2);
        expect(mySqrt(6)).toBe(2);
        expect(mySqrt(7)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(9)).toBe(3);
        expect(mySqrt(10)).toBe(3);
    })
})
const climbStairs = require('./ClimbStairs');

test('input of 1 to equal 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

test('input of 4 to equal 5', () => {
    expect(climbStairs(4)).toBe(5);
});

test('input of 20 to equal 10946', () => {
    expect(climbStairs(20)).toBe(10946);
});
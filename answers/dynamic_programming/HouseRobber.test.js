const rob = require('./HouseRobber');

describe('House Robber I', () => {
  test('', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
    expect(rob([0, 2, 0, 5, 100])).toBe(102);
  });
});

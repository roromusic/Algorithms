const subsetsWithDup = require('./SubsetsII');

describe('return unique subsets', () => {
  test('no duplicate', () => {
    expect(subsetsWithDup([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3]]);
  });
  test('duplicate', () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 2],
      [2],
      [2, 2]]);
  });
});

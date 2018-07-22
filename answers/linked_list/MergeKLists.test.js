const ListNode = require('./ListNode');
const MergeKLists = require('./MergeKLists');

describe('merge k lists', () => {
  test('', () => {
    const test1 = [ListNode.from([1, 4, 5]), ListNode.from([1, 3, 4]), ListNode.from([2, 6])];
    expect(MergeKLists(test1)).toEqual(ListNode.from([1, 1, 2, 3, 4, 4, 5, 6]));
  });
});

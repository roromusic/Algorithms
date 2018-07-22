const ListNode = require('./ListNode');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists) => {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let [list1, list2] = lists.splice(0, 2);
  const mergedList = new ListNode(0);
  let dummy = mergedList;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      dummy.next = new ListNode(list1.val);
      list1 = list1.next;
      dummy = dummy.next;
    } else {
      dummy.next = new ListNode(list2.val);
      list2 = list2.next;
      dummy = dummy.next;
    }
  }

  if (list1) dummy.next = list1;
  if (list2) dummy.next = list2;
  lists.push(mergedList.next);

  return mergeKLists(lists);
};

module.exports = mergeKLists;

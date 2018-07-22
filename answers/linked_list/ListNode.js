function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.from = (arr) => {
  const head = new ListNode(arr.shift());
  let dummy = head;

  for (let i = 0; i < arr.length; i += 1) {
    dummy.next = new ListNode(arr[i]);
    dummy = dummy.next;
  }
  return head;
};

module.exports = ListNode;

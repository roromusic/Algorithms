/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const Heap = require('./Heap');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    const heap = new Heap();

    for(let list of lists){
        let node = list;

        while(node !== null){
            heap.add(node.val);
            node = node.next;
        }
    }
    
    let tail = new ListNode(0);
    let answer = tail;

    while(heap.size > 0){
        tail.next = new ListNode(heap.poll());
        tail = tail.next;
    }

    return answer.next;
};

module.exports = mergeKLists;
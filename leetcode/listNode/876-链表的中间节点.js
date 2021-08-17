/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function LinkNode(val) {
  this.val = val;
  this.next = null;
}

const l = new LinkNode(1);
l.next = new LinkNode(2);
l.next.next = new LinkNode(3);
l.next.next.next = new LinkNode(4);


var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode(l))
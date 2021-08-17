/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//  function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// const l = new ListNode(1);
// l.next = new LinkNode(2);
// l.next.next = new LinkNode(3);
// l.next.next.next = new LinkNode(4);
// l.next.next.next.next = new LinkNode(5);
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const l = new ListNode(1);

var removeNthFromEnd = function(head, n) {
  const pre = new ListNode(-1, head);
  let slow = pre;
  let fast = pre;

  for(let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return pre.next;
};
console.log(removeNthFromEnd(l, 1))
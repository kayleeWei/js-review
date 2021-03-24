/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
   if (!head) return null;

   var left = new ListNode(-1);
   var leftPos = left;
   var right = new ListNode(-1);
   var rightPos = right;

   var cur = head;
   while (cur !== null) {
    if (cur.val < x) {
      leftPos.next = cur;
      leftPos = leftPos.next;
    } else {
      rightPos.next = cur;
      rightPos = rightPos.next;
    }
    cur = cur.next || null;
   }

   rightPos.next = null; // 切断原有的链表！！！
   leftPos.next = right.next;
   return left.next;
};
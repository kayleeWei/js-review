/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
   if (!head) return null;

   var preHead = new ListNode(-1);
   preHead.next = head;

   var pre = head;
   var cur = head.next;

   while(cur !== null) {
    if (cur.val === pre.val) {
      cur = cur.next;
      pre.next = cur;
    } else {
      pre = pre.next;
      cur = cur.next;
    }
   }

   return preHead.next;
};
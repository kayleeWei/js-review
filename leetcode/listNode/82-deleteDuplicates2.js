/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    var preHead = new ListNode(-1);
    preHead.next = head;

    var pre = preHead;
    var cur = head;

    while(cur !== null && cur.next !== null) {
      if (pre.next.val !== cur.next.val) {
        pre = pre.next;
        cur = cur.next;
      } else {
        while (cur !== null && cur.next !== null && pre.next.val === cur.next.val) {
          cur = cur.next
        }
        pre.next = cur.next;
        cur = cur.next; 
      }
    }
  
    return preHead.next;
};
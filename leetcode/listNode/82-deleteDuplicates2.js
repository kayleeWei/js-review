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

// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字

// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]
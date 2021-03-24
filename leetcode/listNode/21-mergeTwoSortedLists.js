/**
 * 合并两个有序链表
   将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 方法一：递归
 var mergeTwoLists = function(l1, l2) {
   if (l1 === null) return l2;
   if (l2 === null) return l1;

   if (l1.val < l2.val) {
     l1.next = mergeTwoLists(l1.next, l2);
     return l1;
   } else {
     l2.next = mergeTwoLists(l1, l2.next);
     return l2;
   }
};

// 方法二：迭代
var mergeTwoLists = function(l1, l2) {
  var preHead = new ListNode(-1);
  var prev = preHead;

  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      prev = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      prev = l2;
      l2 = l2.next;
    }
  }
  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  if (l1 !== null) {
    prev.next = l1;
  } else if (l2 !== null) {
    prev.next = l2;
  }
  return preHead.next;
}


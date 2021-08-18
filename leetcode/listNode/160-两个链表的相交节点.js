/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//  https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/tu-jie-leetcode160xiang-jiao-lian-biao-by-user7746/
// 标记法
var getIntersectionNode = function(headA, headB) {
  while(headA) {
    headA.flag = true;
    headA = headA.next;
  }

  while(headB) {
    if (headB.flag) return headB;

    headB = headB.next;
  }

  return null;
}

// 双指针法
var getIntersectionNode = function(headA, headB) {
  let pA = headA;
  let pB = headB;

  while(pA || pB) {
    if (pA === pB) return pA;

    // 消除两个链表的长度差
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return null; 
};
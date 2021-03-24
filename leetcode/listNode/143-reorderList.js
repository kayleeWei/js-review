/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// https://leetcode-cn.com/problems/reorder-list/
function reverseLink (head) {
  let pre = null;
  let cur = head;

  while(cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}

function getMid (head) {
  let fast = head;
  let slow = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function mergeTwoList(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  while(l1 !== null && l2 !== null) {
    const next = l1.next;
    l1.next = l2;
    l2 = l2.next;
    l1.next.next = next;
    l1 = next;
  }
}

var reorderList = function(head) {
  if (!head || ! head.next || !head.next.next) return head;

  const midNode = getMid(head); // 1. 获取中间节点
  const rightNode = reverseLink(midNode.next); // 翻转后半段链表
  midNode.next = null; // 断开为两个链表
  mergeTwoList(head, rightNode); // 合并两个链表
};

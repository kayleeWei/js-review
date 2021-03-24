/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  const preHead = new ListNode(-1);
  preHead.next = head;

  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  let pre = head; // 前驱节点
  for(let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre; // 最右节点
  for(let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  const succ = rightNode.next; // 后继节点
  const leftNode = pre.next; // 最左节点

  // 切出子链表
  pre.next = null;
  rightNode.next = null;
  // 反转子链表
  reverseLinkedList(leftNode);

  // 穿针引线，重新连接到链表中
  pre.next = rightNode;
  leftNode.next = succ;

  return preHead.next;
};

var reverseLinkedList = function(head) {
  let pre = null;
  let cur = head;

  while(cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
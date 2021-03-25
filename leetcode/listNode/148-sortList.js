/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


function getMid(head) {
  let slow = head; 
  let fast = head.next;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeTwoLists(l1, l2) {
  const preHead = new ListNode(-1);
  let p = preHead;

  while(l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2; 
      l2 = l2.next;
    }
    p = p.next;
  }

  if (l1 !== null) {
    p.next = l1;
  } else if (l2 !== null) {
    p.next = l2;
  }

  return preHead.next;
}

 var sortList = function(head) {
   if (!head || !head.next) return head;
   // 找到中间节点
   const midNode = getMid(head);
   const rightNode = midNode.next;
   midNode.next = null;

  // 分别对两个子链表递归排序
   const left = sortList(head);
   const right = sortList(rightNode);

   return mergeTwoLists(left, right);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  https://leetcode-cn.com/problems/palindrome-linked-list/
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// const testData = new ListNode(1);
// testData.next = new ListNode(2);
// testData.next.next = new ListNode(3);
// testData.next.next.next = new ListNode(2);
// testData.next.next.next.next = new ListNode(1);



function getMid(head) {
  let slow = head;
  let fast = head.next;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return {
    midNode: slow,
    isEven: fast !== null, // 是否一共有偶数个节点，如果是偶数个节点，fast最终停在最后一个节点
  };
}

function reverseLink(head) {
  let prev = null;
  let cur = head;

  while(cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  
  return prev;
}

function compareList(l1, l2) {
  while(l1 !== null && l2 !== null) {
    if (l1.val !== l2.val) {
      return false
    }
    l1 = l1.next;
    l2 = l2.next;
  }

  return true;
}

var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  
  // 获取中间节点
  const { midNode, isEven } = getMid(head);
  let rightNode = midNode.next;
  midNode.next = null;

  // 反转第一个子链表
  const leftNode = reverseLink(head);

  return compareList(isEven ? leftNode : leftNode.next, rightNode);
};

console.log(isPalindrome(testData))
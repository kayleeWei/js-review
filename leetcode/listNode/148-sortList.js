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
  let fast = head;

  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeTwoLists(head) {

}

 var sortList = function(head) {
   const midNode = getMid(head);
   midNode.next = null;

   return mergeTwoLists(head, rightNode);
};
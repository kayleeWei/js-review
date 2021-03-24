// https://leetcode-cn.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const testData = new ListNode(3);
testData.next = new ListNode(2);
testData.next.next = new ListNode(0);
testData.next.next.next = new ListNode(-4);

testData.next.next.next.next = testData.next;


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
   if (!head || !head.next) return null;

   let slow = head;
   let fast = head.next;

   while(slow !== fast) {
     if (fast === null || fast.next === null) {
       return null;
     }

     slow = slow.next;
     fast = fast.next.next;
   }

   let ptr = head;
   console.log(ptr, slow)
   while(ptr !== slow) {
     ptr = ptr.next;
     slow = slow.next;
   }


   return ptr;
};

// console.log(detectCycle(testData))
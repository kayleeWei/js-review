function LinkNode(val) {
  this.val = val;
  this.next = null;
}

const l = new LinkNode(1);
l.next = new LinkNode(2);
l.next.next = new LinkNode(3);
l.next.next.next = l.next;

function hasCycle(head) {
  let res = false;
  let slow = head;
  let fast = head.next;

  while(slow && fast) {
    if (slow === fast) {
      res = true;
      break;
    } else {
      slow = slow.next;
      fast = fast.next.next;
    }
  }

  return res;
}
console.log(hasCycle(l))
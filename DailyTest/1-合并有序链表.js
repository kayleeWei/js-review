function mergeSortedList(l1, l2) {
  let head = new ListNode(-1);
  const pointer = head;

  while (l1.next && l2.next) {
    if (l1.val <= l2.val) {
      head.next = l1;
      head = l1;
      l1 = l1.next;
      // head = head.next;
    } else {
      head.next = l2;
      head = l2;
      l2 = l2.next;
    }
  }

  if (l1.next) {
    head.next = l1;
  } else if (l2.next) {
    head.next = l2;
  }

  return pointer.next;
}

function ListNode(val, next) {
  this.val = val;
  this.next = null;
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(2);
l2.next = new ListNode(3);

const res = mergeSortedList(l1, l2)
console.log(res)
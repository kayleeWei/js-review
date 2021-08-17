function LinkNode(val) {
  this.val = val;
  this.next = null;
}

const l = new LinkNode(1);
l.next = new LinkNode(2);
l.next.next = new LinkNode(3);

function reverseLink(head) {
  let prev = null;
  let cur = head

  while(cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

console.log(reverseLink(l))
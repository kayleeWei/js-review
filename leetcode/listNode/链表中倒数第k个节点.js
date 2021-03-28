/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    if (!head || k === 0) return null;
    
    let p1 = head;
    for (let i = 0; i < k - 1; i++) {
        if (p1.next) {
            p1 = p1.next;
        } else {
            return null;
        }
    }
    
    let p2 = head;
    while(p1.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return p2;
}
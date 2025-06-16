// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

function splitCircularLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast.next != head && fast.next.next != head) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head1 = head;
  let head2 = slow.next;

  slow.next = head1;
  fast = head2;

  while (fast.next != head) {
    fast = fast.next;
  }

  fast.next = head2;

  return [head1, head2];
}

export { splitCircularLinkedList };

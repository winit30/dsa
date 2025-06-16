// The first input of the test case is an array of values representing a linked list.
// The second input is the index where the tail connects to form a cycle (or −1 if there's no cycle).
// This index is used only to construct the linked list and is not passed to the function.

// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

function countCycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let length = 1;
      slow = slow.next;
      while (slow != fast) {
        length++;
        slow = slow.next;
      }
      return length;
    }
  }
  return 0;
}

export { countCycleLength };

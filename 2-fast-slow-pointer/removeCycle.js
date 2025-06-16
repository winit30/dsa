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

function removeCycle(head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
      }
      while (fast.next != slow) {
        fast = fast.next;
      }
      fast.next = null;
      break;
    }
  }

  // Replace this placeholder return statement with your code
  return head;
}

export { removeCycle };

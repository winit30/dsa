// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

function reverseLinkedList(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function compareTwoHalfs(firstHalf, secondHalf) {
  while (firstHalf != null && secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    } else {
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  }
  return true;
}

function palindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let revertData = reverseLinkedList(slow);
  let check = compareTwoHalfs(head, revertData);
  reverseLinkedList(revertData);

  return check;
}

export { palindrome };

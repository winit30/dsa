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

function calculateMaxSum(firstHalf, secondHalf) {
  let maxNumber = -Infinity;

  while (firstHalf != null && secondHalf != null) {
    const currSum = firstHalf.val + secondHalf.val;
    if (currSum > maxNumber) {
      maxNumber = currSum;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return maxNumber;
}

function twinSum(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const revertData = reverseLinkedList(slow);
  const maxSum = calculateMaxSum(head, revertData);
  reverseLinkedList(revertData);

  return maxSum;
}

export { twinSum };

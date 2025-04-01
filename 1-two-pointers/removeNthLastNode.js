/**
 * Given the head of a singly linked list, remove the nth node from the end of the list and return its head.
 */

function removeNthLastNode(head, n) {

    let first = head
    let second = head

    for(let i = 0; i < n; i++) {
        first = first.next
    }

    if(!first) {
        return head.next
    }

    while(first.next != null) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next

    return head
}

2

// {1, next}->{2, next}->{3, next}->{4, next}->{5, next}->null
// if N is 2
// first = {5, next}
// second = {3, next}
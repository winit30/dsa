// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

function detectCycle(head){
    
    if (!head) {
        return false;
    }

    // Replace this placeholder return statement with your code
    let slowPointer = head
    let fastPointer = head
    
    while(fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        
        if(fastPointer === slowPointer) {
            return true
        }
    }
    
    
    return false;
}

export {
    detectCycle
};

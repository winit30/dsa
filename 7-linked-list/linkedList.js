// Node class
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the end
  append(val) {
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  // Insert at the beginning
  prepend(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete a node by value
  delete(val) {
    if (!this.head) return;

    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    while (curr.next && curr.next.val !== val) {
      curr = curr.next;
    }

    if (curr.next) {
      curr.next = curr.next.next;
    }
  }

  // Search for a value
  search(val) {
    let curr = this.head;
    while (curr) {
      if (curr.val === val) return true;
      curr = curr.next;
    }
    return false;
  }

  // Convert to array for easy display
  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }

  // Print the list
  print() {
    console.log(this.toArray().join(" -> "));
  }
}

export { LinkedList };

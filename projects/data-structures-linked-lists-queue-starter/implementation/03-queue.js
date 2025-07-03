const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head) return undefined;
    if (this.head.next === this.tail) {
      this.head = this.tail;
    } else {
      this.head = this.head.next;
    }
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};

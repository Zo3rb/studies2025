// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    // Add node of val to head of linked list

    // Time Complexity --> O(1)
    const newNode = new DoublyLinkedNode(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    const newNode = new DoublyLinkedNode(val);

    if (!this.head && !this.tail && !this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head && !this.tail && !this.length) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;

    return removedNode.value;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head && !this.tail && !this.length) return undefined;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;

    return removedNode.value;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head && !this.tail && this.length === 0) return undefined;
    else {
      return this.head.value;
    }
  }

  peekAtTail() {
    // Return value of tail node
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head && !this.tail && !this.length) return undefined;
    else {
      return this.tail.value;
    }
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};

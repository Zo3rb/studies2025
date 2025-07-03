// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    const newNode = new SinglyLinkedNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here
    // Add node of val to tail of linked list

    // Time Complexity --> O(n)
    const newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head) return undefined;

    let removedNode = this.head;
    if (this.length === 1) this.head = null;
    else {
      this.head = this.head.next;
    }

    this.length--;
    return removedNode;
  }

  removeFromTail() {
    // Remove node at tail
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(n)
    if (!this.head && this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) this.head = null;
    else {
      let prevNode = removedNode;
      while (removedNode.next) {
        prevNode = removedNode;
        removedNode = removedNode.next;
      }

      prevNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  peekAtHead() {
    // Return value of head node
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(1)
    if (!this.head && this.length === 0) return undefined;
    else {
      return this.head.value;
    }
  }

  print() {
    // Print out the linked list
    // Write your hypothesis on the time complexity of this method here

    // Time Complexity --> O(n)
    if (!this.head && this.length === 0) return;
    else {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};

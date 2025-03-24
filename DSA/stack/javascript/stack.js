#!/bin/node

// Stack Data Structure Implementation in JavaScript (Node.js)

class Stack {
  /**
   * Stack ADT Class.
   */
  constructor() {
    this.items = [];
  }

  length() {
    /**
     * Return the number of elements in the stack.
     */
    return this.items.length;
  }

  push(item) {
    /**
     * Push item onto the stack.
     */
    this.items.push(item);
  }

  pop() {
    /**
     * Pop item from the stack.
     */
    if (this.isEmpty()) {
      return null; // Prevent popping from an empty stack
    }
    return this.items.pop();
  }

  peek() {
    /**
     * Return the top item without removing it.
     */
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    /**
     * Return true if the stack is empty, false otherwise.
     */
    return this.items.length === 0;
  }
}

// Example Usage
if (require.main === module) {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);

  console.log("Stack Length:", stack.length()); // Output: 3
  console.log("Stack Peek:", stack.peek()); // Output: 30
  console.log("Stack Pop:", stack.pop()); // Output: 30
  console.log("Stack After Pop Length:", stack.length()); // Output: 2
  console.log("Is Stack Empty?", stack.isEmpty()); // Output: false
}

#!/usr/bin/env node

/**
 * singly_linked_list.js
 *
 * This module defines a basic singly linked list data structure in JavaScript.
 */

class Node {
  /**
   *
   * @param {*} val : Data to be Hold into the Node.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   *
   * @param {*} val : Data to be pushed within the New Node.
   * @returns {LinkedList} : The whole linked list after adding the new Node.
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   *
   * @returns : The Popped Node.
   */
  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    newTail.next = null;
    this.tail = newTail;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  /**
   *
   * @returns : The Node that will be shifted (removed at beginning)
   */
  shift() {
    if (!this.head) return undefined;

    let headNode = this.head;
    this.head = headNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return headNode;
  }

  /**
   *
   * @param {*} val : The New Node data to be Add on the first.
   * @returns : The whole linked List.
   */
  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   *
   * @param {Number} index : Index to indicate which Element should be returned.
   * @returns : the corresponding Node.
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
   *
   * @param {Number} index : Index to indicate which Element should be Modified.
   * @param {any} data : The Data which will be the new Value of the Node.
   * @returns : the corresponding Node.
   */
  set(index, data) {
    const node = this.get(index);
    if (!node) return null;
    node.val = data;
    return node;
  }

  /**
   *
   * @param {Number} index : The index to insert a new node.
   * @param {*} val : The Data to be inserted within the node.
   * @returns : The whole linked list.
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unShift(val);
      return this;
    }

    if (index === this.length) {
      this.push(val);
      return this;
    }

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return this;
  }

  /**
   *
   * @param {number} index - The index of the node to remove.
   * @returns {Node|null} - The removed node, or null if index is invalid.
   */
  remove(index) {
    if (index < 0 || index >= this.length) return null;

    // Remove head
    if (index === 0) return this.shift();

    // Remove tail
    if (index === this.length - 1) return this.pop();

    // Remove in the middle
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;

    prevNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  /**
   *
   * @returns : The whole list values into an Array type.
   */
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }

    return result;
  }

  /**
   *
   * @returns : the whole list as an array type printed.
   */
  print() {
    return console.log(this.toArray);
  }

  /**
   *
   * @returns : The whole linked list reversed.
   */
  reverse() {
    if (!this.head || !this.head.next) return this;

    let current = this.head;
    let prev = null;
    let next = null;

    this.head = this.tail;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;

    return this;
  }
}

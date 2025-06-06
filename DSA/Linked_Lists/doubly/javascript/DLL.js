#!/usr/bin/env node

/**
 * doubly_linked_list.js
 *
 * This module defines a basic doubly linked list data structure in JavaScript.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
   * @param {*} val : The Data Value to be inserted into the new Node.
   * @returns : The whole Linked List.
   */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
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
    else if (this.head === this.tail) {
      let lastNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return lastNode;
    }

    let lastNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;

    return lastNode;
  }

  /**
   *
   * @returns : The Node that will be shifted (removed at beginning)
   */
  shift() {
    if (!this.head) return undefined;
    else if (this.head === this.tail) {
      let firstNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;

      return firstNode;
    }

    let firstNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;

    return firstNode;
  }

  /**
   *
   * @param {*} val : The New Node data to be Add on the first.
   * @returns : The whole linked List.
   */
  unShift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
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
    const nextNode = this.get(index);

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

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

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

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
    return console.log(this.toArray());
  }
}

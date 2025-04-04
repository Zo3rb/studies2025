#!/usr/bin/env node

/**
 * singly_linked_list.js
 *
 * This module defines a basic singly linked list data structure in JavaScript.
 */

class Node {
  /**
   * A node in a singly linked list.
   * @param {*} data The value stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  /**
   * A singly linked list.
   */
  constructor() {
    this.head = null;
  }

  /**
   * Returns a string representation of the linked list.
   * @returns {string} String representation of the linked list.
   */
  toString() {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(String(current.data));
      current = current.next;
    }
    return nodes.join(" -> ") || "[]"; // Handles empty list case
  }

  /**
   * Inserts a new node at the end of the linked list.
   * @param {*} data The data to store in the new node.
   */
  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  /**
   * Deletes the first node that contains the specified value.
   * @param {*} value The value to search for and delete.
   */
  deleteByValue(value) {
    if (this.head && this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    while (current && current.data !== value) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
    }
  }

  /**
   * Deletes the node at the specified position (0-indexed).
   * @param {number} position The position of the node to delete.
   */
  deleteByPosition(position) {
    if (!this.head) {
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let index = 0;
    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    if (current) {
      // Check if the position is valid
      prev.next = current.next;
    }
  }

  /**
   * Calculates and returns the length of the linked list.
   * @returns {number} The number of nodes in the linked list.
   */
  length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  /**
   * Swaps the nodes with the given data values (key1 and key2).
   * @param {*} key1 The data value of the first node to swap.
   * @param {*} key2 The data value of the second node to swap.
   */
  nodeSwap(key1, key2) {
    if (key1 === key2) return;

    let prev1 = null;
    let current1 = this.head;
    while (current1 && current1.data !== key1) {
      prev1 = current1;
      current1 = current1.next;
    }

    let prev2 = null;
    let current2 = this.head;
    while (current2 && current2.data !== key2) {
      prev2 = current2;
      current2 = current2.next;
    }

    if (!current1 || !current2) return;

    if (prev1) prev1.next = current2;
    else this.head = current2;

    if (prev2) prev2.next = current1;
    else this.head = current1;

    [current1.next, current2.next] = [current2.next, current1.next];
  }

  /**
   * Reverses the linked list in-place.
   */
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
  }

  /**
   * Merges this sorted linked list with another sorted linked list.
   * @param {LinkedList} otherList The other sorted LinkedList to merge.
   * @returns {LinkedList} A new sorted linked list containing all elements.
   */
  mergeSorted(otherList) {
    const mergedList = new LinkedList();
    let p1 = this.head;
    let p2 = otherList.head;

    while (p1 && p2) {
      if (p1.data <= p2.data) {
        mergedList.insert(p1.data);
        p1 = p1.next;
      } else {
        mergedList.insert(p2.data);
        p2 = p2.next;
      }
    }

    // Add any remaining elements from list1
    while (p1) {
      mergedList.insert(p1.data);
      p1 = p1.next;
    }

    // Add any remaining elements from list2
    while (p2) {
      mergedList.insert(p2.data);
      p2 = p2.next;
    }

    return mergedList;
  }
}

#!/usr/bin/env node
/**
 * Implementation of Binary Search Tree Data Structure.
 */

/**
 * Representation of a Node into the Binary Search Tree.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Representation of Tree (Binary Search Tree).
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   *
   * @param {*} value : Value of the New Node to be inserted.
   * @returns : The whole Tree.
   */
  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   *
   * @param {*} value : Value to check if its in Tree or Not.
   * @returns : Boolean based on the value if Found or not.
   */
  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

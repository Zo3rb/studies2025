#!/bin/env node

/**
 * Implementation of Queue (FIFO).
 */

class Queue {
  /**
   * A class representing a basic Queue with fixed capacity.
   */

  /**
   * Constructor Function to Initialize a new Queue.
   * @param {*} capacity - The Fixed size of Queue.
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.data = [];
    this.head = -1;
    this.tail = -1;
  }

  /**
   * Check if the queue is empty.
   */
  isEmpty() {
    return this.data.length === 0;
  }

  /**
   * Check if the queue is full.
   */
  isFull() {
    return this.data.length === this.capacity;
  }

  /**
   * Adding a new item to the Queue (Last In).
   * @param {*} item - The Item to be Enqueued.
   */
  enqueue(item) {
    if (this.isFull()) {
      console.log("This queue is full. Cannot add item.");
      return null;
    }

    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail += 1;
    this.data.push(item);
    console.log(`Item ${item} added successfully to the queue.`);
    return item;
  }

  /**
   * Remove an item from the front of the queue.
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("This queue is empty. Nothing to dequeue.");
      return null;
    }
    let itemToDequeue = this.data.shift();
    this.tail -= 1;
    console.log(`Front item ${itemToDequeue} dequeued successfully.`);
    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    }
    return itemToDequeue;
  }

  /**
   * Return the front item without removing it.
   */
  peek() {
    if (this.isEmpty()) {
      console.log("This queue is empty.");
      return null;
    }
    return this.data[0];
  }

  /**
   * Return the current number of items in the queue.
   */
  size() {
    return this.data.length;
  }

  /**
   * Display the current queue.
   */
  show() {
    if (this.isEmpty()) {
      console.log("This queue is empty. Nothing to show.");
      return [];
    }
    return this.data;
  }
}

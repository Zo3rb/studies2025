#!/bin/env python3

"""
Implementation of Queue (FIFO).
"""

class Queue:
    """
    A class representing a basic Queue with fixed capacity.
    """

    def __init__(self, capacity):
        """Initialize the queue."""
        self.capacity = capacity
        self.data = []
        self.head = -1
        self.tail = -1

    def is_empty(self):
        """Check if the queue is empty."""
        return len(self.data) == 0

    def is_full(self):
        """Check if the queue is full."""
        return len(self.data) == self.capacity

    def enqueue(self, item):
        """Add an item to the queue."""
        if self.is_full():
            print("This queue is full. Cannot add item.")
            return -1
        if self.is_empty():
            self.head = 0
        self.tail += 1
        self.data.append(item)
        print(f"Item {item} added successfully to the queue.")
        return item

    def dequeue(self):
        """Remove an item from the front of the queue."""
        if self.is_empty():
            print("This queue is empty. Nothing to dequeue.")
            return -1
        item_dequeued = self.data.pop(0)
        self.tail -= 1
        print(f"Front item {item_dequeued} dequeued successfully.")
        if self.is_empty():
            self.head = -1
            self.tail = -1
        return item_dequeued

    def peek(self):
        """Return the front item without removing it."""
        if self.is_empty():
            print("This queue is empty.")
            return None
        return self.data[0]

    def size(self):
        """Return the current number of items in the queue."""
        return len(self.data)

    def show(self):
        """Display the current queue."""
        if self.is_empty():
            print("This queue is empty. Nothing to show.")
            return []
        return self.data

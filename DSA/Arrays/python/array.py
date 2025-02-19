#!/bin/python3
"""Array Data Structure Module"""

class Array:
    """Array ADT"""
    def __init__(self, size):
        """Initializing the array with a fixed size."""
        self.size = size
        self.length = 0
        self.data = [None] * size

    def display(self):
        """Class method to display the Array"""
        if self.length == 0:
            print("Array is Empty.")
        else:
            for i in range(self.length):
                print(self.data[i], end=" ")
                print()

    def append(self, value):
        """Class method to append an element to the Array."""
        if self.length < self.size:
            self.data[self.length] = value
            self.length += 1
        else:
            print("Array is Full! Cannot append more Elements.")

    def insert(self, index, value):
        """Class method to insert an Element."""
        if self.length >= self.size:
            print("Array is full! Cannot insert more Elements.")
            return

        if index < 0 or index > self.length:
            print(f"Invalid Index! must be between 0 and {self.length}")
            return

        # Shifting Elements to the Right.
        for i in range(self.length, index, -1):
            self.data[i] = self.data[i - 1]

        self.data[index] = value
        self.length += 1

    def delete(self, index):
        """Class method to delete from Array."""
        if self.length == 0:
            print("Array is empty! nothing to Delete.")
            return

        if index < 0 or index >= self.length:
            print(f"Invalid index! Must be between o and {self.length}")
            return

        # Shifting Elements to the Left.
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i+1]

        # Set the last Element to None and decrease Length.
        self.data[self.length - 1] = None
        self.length -= 1

    def search(self, value):
        """Class method to search for an Element in Array."""
        for i in range (self.length):
            if self.data[i] == value:
                return i
        return -1

#!/bin/python3

"""
Stack Data Structure.
"""

class Stack:
    """Stack ADT Class."""

    def __init__(self):
        self.items = []

    def length(self):
        """Return the number of elements in the stack."""
        return len(self.items)

    def push(self, item):
        """Push item onto the stack."""
        self.items.append(item)

    def pop(self):
        """Pop item from the stack."""
        if self.is_empty():
            return None  # Prevent popping from an empty stack
        return self.items.pop()

    def peek(self):
        """Return the top item without removing it."""
        if self.is_empty():
            return None
        return self.items[-1]

    def is_empty(self):
        """Return True if the stack is empty, False otherwise."""
        return len(self.items) == 0


# Example Usage
if __name__ == "__main__":
    stack = Stack()
    stack.push(10)
    stack.push(20)
    stack.push(30)

    print("Stack Length:", stack.length())  # Output: 3
    print("Stack Peek:", stack.peek())      # Output: 30
    print("Stack Pop:", stack.pop())        # Output: 30
    print("Stack After Pop Length:", stack.length())  # Output: 2
    print("Is Stack Empty?", stack.is_empty())  # Output: False

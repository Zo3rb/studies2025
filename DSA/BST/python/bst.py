#!/usr/bin/env python3
"""
    Implementation of Binary Search Tree Data Structure.
"""

class Node:
    """Representation of a Node in the Binary Search Tree."""
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    """Representation of Binary Search Tree."""
    def __init__(self):
        self.root = None

    def insert(self, value):
        """
        Insert a new node with the given value into the tree.
        
        Args:
            value: Value of the new node to be inserted.
        Returns:
            The BinarySearchTree instance.
        """
        new_node = Node(value)

        if self.root is None:
            self.root = new_node
            return self

        current = self.root
        while True:
            if value == current.value:
                return None
            if value < current.value:
                if current.left is None:
                    current.left = new_node # type: ignore
                    return self
                current = current.left
            else:
                if current.right is None:
                    current.right = new_node # type: ignore
                    return self
                current = current.right

    def contains(self, value):
        """
        Check if a value exists in the tree.
        
        Args:
            value: Value to check.
        Returns:
            Boolean indicating if the value is found.
        """
        if self.root is None:
            return False

        current = self.root
        while current:
            if value < current.value:
                current = current.left
            elif value > current.value:
                current = current.right
            else:
                return True
        return False

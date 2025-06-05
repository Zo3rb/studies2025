#!/usr/bin/env python3

"""
singly_linked_list.py

This module defines a basic singly linked list data structure in Python.
"""

from typing import Any, Optional


class Node:
    """
    A node in a singly linked list.

    Attributes:
        val: The data stored in the node.
        next: The reference to the next node.
    """

    def __init__(self, val: Any) -> None:
        self.val: Any = val
        self.next: Optional['Node'] = None


class LinkedList:
    """
    Singly Linked List implementation.
    """

    def __init__(self) -> None:
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None
        self.length: int = 0

    def push(self, val: Any) -> 'LinkedList':
        """
        Adds a new node with the given value to the end of the list.
        """
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            assert self.tail is not None
            self.tail.next = new_node
            self.tail = new_node

        self.length += 1
        return self

    def pop(self) -> Optional[Node]:
        """
        Removes the last node from the list and returns it.
        """
        if not self.head:
            return None

        current_node = self.head
        new_tail = current_node

        while current_node.next:
            new_tail = current_node
            current_node = current_node.next

        new_tail.next = None
        self.tail = new_tail
        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None

        return current_node

    def shift(self) -> Optional[Node]:
        """
        Removes the first node from the list and returns it.
        """
        if not self.head:
            return None

        head_node = self.head
        self.head = head_node.next
        self.length -= 1

        if self.length == 0:
            self.tail = None

        return head_node

    def unshift(self, val: Any) -> 'LinkedList':
        """
        Adds a new node with the given value to the beginning of the list.
        """
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node

        self.length += 1
        return self

    def get(self, index: int) -> Optional[Node]:
        """
        Returns the node at the specified index.
        """
        if index < 0 or index >= self.length:
            return None

        current_node = self.head
        for _ in range(index):
            assert current_node is not None
            current_node = current_node.next

        return current_node

    def set(self, index: int, data: Any) -> Optional[Node]:
        """
        Updates the value of the node at the specified index.
        """
        node = self.get(index)
        if not node:
            return None

        node.val = data
        return node

    def insert(self, index: int, val: Any) -> Optional['LinkedList']:
        """
        Inserts a new node with the given value at the specified index.
        """
        if index < 0 or index > self.length:
            return None

        if index == 0:
            return self.unshift(val)

        if index == self.length:
            return self.push(val)

        new_node = Node(val)
        prev_node = self.get(index - 1)

        if not prev_node:
            return None

        new_node.next = prev_node.next
        prev_node.next = new_node
        self.length += 1

        return self

    def remove(self, index: int) -> Optional[Node]:
        """
        Removes and returns the node at the specified index.
        """
        if index < 0 or index >= self.length:
            return None

        if index == 0:
            return self.shift()

        if index == self.length - 1:
            return self.pop()

        prev_node = self.get(index - 1)
        if not prev_node or not prev_node.next:
            return None

        removed_node = prev_node.next
        prev_node.next = removed_node.next
        self.length -= 1

        return removed_node

    def to_array(self) -> list[Any]:
        """
        Converts the linked list to a Python list.
        """
        result = []
        current = self.head

        while current:
            result.append(current.val)
            current = current.next

        return result

    def print(self) -> None:
        """
        Prints the linked list as a Python list.
        """
        print(self.to_array())

    def reverse(self) -> 'LinkedList':
        """
        Reverses the linked list in place.
        """
        if not self.head or not self.head.next:
            return self

        current = self.head
        prev = None
        self.tail = self.head

        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev
        return self

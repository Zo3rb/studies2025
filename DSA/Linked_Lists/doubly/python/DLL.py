#!/usr/bin/env python3
"""
doubly_linked_list.py

This module defines a basic doubly linked list data structure in Python.
"""

from __future__ import annotations
from typing import Any, Optional, List


class Node:
    """
    A Node in a doubly linked list.
    """

    def __init__(self, val: Any) -> None:
        self.val: Any = val
        self.next: Optional[Node] = None
        self.prev: Optional[Node] = None


class LinkedList:
    """
    A doubly linked list implementation.
    """

    def __init__(self) -> None:
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None
        self.length: int = 0

    def push(self, val: Any) -> LinkedList:
        """
        Add a node with `val` to the end of the list.

        :param val: Value to insert.
        :return: Self (LinkedList).
        """
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            assert self.tail is not None  # for type checker
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node

        self.length += 1
        return self

    def pop(self) -> Optional[Node]:
        """
        Remove the last node and return it.

        :return: The removed Node or None if list is empty.
        """
        if not self.head:
            return None
        if self.head == self.tail:
            last_node = self.head
            self.head = None
            self.tail = None
            self.length -= 1
            return last_node

        assert self.tail is not None  # for type checker
        last_node = self.tail
        self.tail = self.tail.prev
        if self.tail:
            self.tail.next = None
        self.length -= 1
        return last_node

    def shift(self) -> Optional[Node]:
        """
        Remove the first node and return it.

        :return: The removed Node or None if list is empty.
        """
        if not self.head:
            return None
        if self.head == self.tail:
            first_node = self.head
            self.head = None
            self.tail = None
            self.length -= 1
            return first_node

        first_node = self.head
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        self.length -= 1
        return first_node

    def unshift(self, val: Any) -> LinkedList:
        """
        Add a node with `val` to the beginning of the list.

        :param val: Value to insert.
        :return: Self (LinkedList).
        """
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            assert self.head is not None  # for type checker
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node

        self.length += 1
        return self

    def get(self, index: int) -> Optional[Node]:
        """
        Get the node at the specified index.

        :param index: Position of the node to retrieve.
        :return: The Node or None if index out of range.
        """
        if index < 0 or index >= self.length:
            return None

        current = self.head
        count = 0
        while count < index and current is not None:
            current = current.next
            count += 1

        return current

    def set(self, index: int, data: Any) -> Optional[Node]:
        """
        Update the node value at the specified index.

        :param index: Position of the node to update.
        :param data: New value for the node.
        :return: The updated Node or None if index invalid.
        """
        node = self.get(index)
        if not node:
            return None
        node.val = data
        return node

    def insert(self, index: int, val: Any) -> Optional[LinkedList]:
        """
        Insert a new node with `val` at the specified index.

        :param index: Position to insert the new node.
        :param val: Value to insert.
        :return: Self (LinkedList) or None if index invalid.
        """
        if index < 0 or index > self.length:
            return None

        if index == 0:
            return self.unshift(val)

        if index == self.length:
            return self.push(val)

        new_node = Node(val)
        prev_node = self.get(index - 1)
        next_node = self.get(index)

        if prev_node is None or next_node is None:
            return None

        new_node.prev = prev_node
        new_node.next = next_node
        prev_node.next = new_node
        next_node.prev = new_node

        self.length += 1
        return self

    def remove(self, index: int) -> Optional[Node]:
        """
        Remove the node at the specified index.

        :param index: Position of the node to remove.
        :return: The removed Node or None if index invalid.
        """
        if index < 0 or index >= self.length:
            return None

        if index == 0:
            return self.shift()

        if index == self.length - 1:
            return self.pop()

        removed_node = self.get(index)
        if removed_node is None:
            return None

        prev_node = removed_node.prev
        next_node = removed_node.next

        if prev_node:
            prev_node.next = next_node
        if next_node:
            next_node.prev = prev_node

        self.length -= 1
        return removed_node

    def to_array(self) -> List[Any]:
        """
        Return a list of all node values.

        :return: List of node values.
        """
        result: List[Any] = []
        current = self.head
        while current:
            result.append(current.val)
            current = current.next
        return result

    def print(self) -> None:
        """
        Print the list values.
        """
        print(self.to_array())

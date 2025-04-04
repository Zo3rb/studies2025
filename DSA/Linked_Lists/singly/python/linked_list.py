#!/usr/bin/python3

"""
singly_linked_list.py

This module defines a basic singly linked list data structure in Python.
"""

class Node:
    """A node in a singly linked list."""
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """A singly linked list."""
    def __init__(self):
        """Initialize an empty linked list."""
        self.head = None

    def __str__(self):
        """Return a string representation of the linked list."""
        nodes = []
        current = self.head
        while current:
            nodes.append(str(current.data))
            current = current.next
        return " -> ".join(nodes) if nodes else "[]"


    def insert(self, data):
        """Insert a new node at the end of the linked list."""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return

        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def delete_by_value(self, value):
        """Delete the first node that contains the specified value."""
        if self.head and self.head.data == value:
            self.head = self.head.next
            return

        current = self.head
        prev = None
        while current and current.data != value:
            prev = current
            current = current.next

        if current:
            prev.next = current.next

    def delete_by_position(self, position):
        """Deletes the node at the specified position (0-indexed)."""
        if not self.head:
            return

        if position == 0:
            self.head = self.head.next
            return

        current = self.head
        prev = None
        index = 0
        while current and index < position:
            prev = current
            current = current.next
            index += 1

        if current:
            prev.next = current.next

    def length(self):
        """
        Calculates and returns the length of the linked list.

        Returns:
            int: The number of nodes in the linked list.
        """
        count = 0
        current = self.head

        while current:
            count += 1
            current = current.next

        return count

    def node_swap(self, key1, key2):
        """
        Swaps the nodes with the given data values (key1 and key2).

        Args:
            key1: The data value of the first node to swap.
            key2: The data value of the second node to swap.
        """
        if key1 == key2:
            return

        prev1 = None
        current1 = self.head
        while current1 and current1.data != key1:
            prev1 = current1
            current1 = current1.next

        prev2 = None
        current2 = self.head
        while current2 and current2.data != key2:
            prev2 = current2
            current2 = current2.next

        if not current1 or not current2:
            return

        if prev1:
            prev1.next = current2
        else:
            self.head = current2

        if prev2:
            prev2.next = current1
        else:
            self.head = current1

        current1.next, current2.next = current2.next, current1.next

    def reverse(self):
        """Reverses the linked list in-place."""
        prev = None
        current = self.head

        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev

    def merge_sorted(self, other_list):
        """
        Merges this sorted linked list with another sorted linked list.

        Args:
            other_list: The other sorted LinkedList to merge.

        Returns:
            LinkedList: A new sorted linked list containing all elements.
        """

        merged_list = LinkedList()
        p1 = self.head
        p2 = other_list.head

        while p1 and p2:
            if p1.data <= p2.data:
                merged_list.insert(p1.data)
                p1 = p1.next
            else:
                merged_list.insert(p2.data)
                p2 = p2.next

        # Add any remaining elements from list1
        while p1:
            merged_list.insert(p1.data)
            p1 = p1.next

        # Add any remaining elements from list2
        while p2:
            merged_list.insert(p2.data)
            p2 = p2.next

        return merged_list

    def remove_duplicates(self):
        """Removing Duplicates Method."""
        cur = self.head
        prev = None
        dup_values = dict()

        while cur:
            if cur.data in dup_values:
                # Remove node:
                prev.next = cur.next
                cur = None
            else:
                # Have not encountered element before.
                dup_values[cur.data] = 1
                prev = cur
            cur = prev.next

    def print_nth_from_last(self, n):
        """NTH from list."""
        p = self.head
        q = self.head

        if n > 0:
            count = 0
            while q:
                count += 1
                if count>=n:
                    break
                q = q.next

            if not q:
                print(str(n) + " is greater than the number of nodes in list.")
                return

            while p and q.next:
                p = p.next
                q = q.next
            return p.data
        else:
            return None

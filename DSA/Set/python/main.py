#!/usr/bin/env python3
"""
Module: custom_set
Description: Implements a custom Set data structure using hashing for uniqueness and performance.
"""

class CustomSet:
    """
    A custom implementation of a Set data structure using Python dictionary
    for fast lookup and storage of unique elements.
    """

    def __init__(self):
        """
        Initializes the internal hash map to store unique elements.
        """
        self._data = {}

    def add(self, element):
        """
        Adds an element to the set if it's not already present.

        Args:
            element: The element to be added.
        """
        self._data[element] = True

    def has(self, element):
        """
        Checks whether the element exists in the set.

        Args:
            element: The element to check for existence.

        Returns:
            bool: True if element exists, False otherwise.
        """
        return element in self._data

    def delete(self, element):
        """
        Deletes an element from the set if it exists.

        Args:
            element: The element to be removed.

        Returns:
            bool: True if the element was removed, False if it was not present.
        """
        if element in self._data:
            del self._data[element]
            return True
        return False

    def clear(self):
        """
        Removes all elements from the set.
        """
        self._data.clear()

    def size(self):
        """
        Returns the number of unique elements in the set.

        Returns:
            int: The size of the set.
        """
        return len(self._data)

    def values(self):
        """
        Returns a list of all unique elements in the set.

        Returns:
            list: Elements in the set.
        """
        return list(self._data)

    def union(self, other_set):
        """
        Returns a new set containing all unique elements from both sets.

        Args:
            other_set (CustomSet): The other set to union with.

        Returns:
            CustomSet: A new set containing all elements.
        """
        result = CustomSet()
        for key in self._data:
            result.add(key)
        for key in other_set._data:
            result.add(key)
        return result

    def intersection(self, other_set):
        """
        Returns a new set with elements present in both sets.

        Args:
            other_set (CustomSet): The other set to intersect with.

        Returns:
            CustomSet: A new set containing common elements.
        """
        result = CustomSet()
        for key in self._data:
            if other_set.has(key):
                result.add(key)
        return result

    def difference(self, other_set):
        """
        Returns a new set with elements in this set but not in the other.

        Args:
            other_set (CustomSet): The other set to subtract.

        Returns:
            CustomSet: A new set with the difference.
        """
        result = CustomSet()
        for key in self._data:
            if not other_set.has(key):
                result.add(key)
        return result

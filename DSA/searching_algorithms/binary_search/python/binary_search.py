#!/bin/env python3

"""
    Implementation of Linear Search Algorithm.
"""

def binary_search(arr, target):
    """Performs a binary search for target in arr. Returns index or -1 if not found."""
    start = 0 # Pointer for the First Element Index.
    end = len(arr) - 1 # Pointer for the Last Element Index.

    while start <= end:
        mid = start + (end - start) // 2 # Pointer for the Middle Element of Index.

        if arr[mid] == target:
            return mid
        elif target > arr[mid]:
            start = mid + 1
        else:
            end = mid - 1

    return -1

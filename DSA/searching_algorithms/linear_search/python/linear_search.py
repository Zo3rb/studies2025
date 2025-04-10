#!/bin/env python3

"""
    Implementation of Linear Search Algorithm.
"""

def linear_search(arr, target):
    """Performs a linear search for target in arr. Returns index or -1 if not found."""
    for idx, value in enumerate(arr):
        if value == target:
            return idx
    return -1

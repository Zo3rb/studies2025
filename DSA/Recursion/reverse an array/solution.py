#!/usr/bin/env python3
"""
Module: Reverse an Array Using Recursion

This module provides a function to reverse an array in-place using recursion.
It demonstrates the use of recursion to solve the problem without using
additional data structures.
"""

def reverse_array(arr, start, end):
    """
    Reverse a portion of the array in-place using recursion.

    Args:
        arr (list): The array to be reversed.
        start (int): The starting index of the portion to reverse.
        end (int): The ending index of the portion to reverse.

    Returns:
        list: The array with the specified portion reversed.

    Example:
        >>> reverse_array([1, 2, 3, 4, 5], 0, 4)
        [5, 4, 3, 2, 1]
    """
    if start >= end:
        return arr

    arr[start], arr[end] = arr[end], arr[start]
    return reverse_array(arr, start + 1, end - 1)

if __name__ == "__main__":
    # Test cases
    test_cases = [
        ([1, 2, 3, 4, 5], 0, 4),
        ([10, 20, 30], 0, 2),
        ([1], 0, 0),
        ([], 0, -1)
    ]

    for i, (arr, start, end) in enumerate(test_cases, 1):
        result = reverse_array(arr, start, end)
        print(f"Test Case {i}: reverse_array({arr}, {start}, {end}) = {result}")

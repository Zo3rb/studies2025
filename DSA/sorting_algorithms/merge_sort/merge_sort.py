#!/usr/bin/env python3

"""
Module: merge_sort.py
Description: Implementation of the merge sort algorithm in Python.
             Splits an array into halves, recursively sorts them, and merges
             the sorted halves to produce a sorted array.
Time Complexity: O(n log n) for all cases
Space Complexity: O(n)
Stability: Yes
"""

def merge_sort(arr):
    """
    Sorts a list using the merge sort algorithm.
    Args:
        arr (list): The input list to be sorted.
    Returns:
        list: A new sorted list in ascending order.
    """
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2
    left_arr = arr[:mid]
    right_arr = arr[mid:]

    return merge(merge_sort(left_arr), merge_sort(right_arr))

def merge(left_arr, right_arr):
    """
    Merges two sorted lists into a single sorted list.
    Args:
        left_arr (list): The left sorted list.
        right_arr (list): The right sorted list.
    Returns:
        list: A merged sorted list.
    """
    res = []
    while left_arr and right_arr:
        if left_arr[0] < right_arr[0]:
            res.append(left_arr.pop(0))
        else:
            res.append(right_arr.pop(0))

    return res + left_arr + right_arr

def run_tests():
    """
    Runs test cases to verify the merge_sort implementation.
    """
    test_cases = [
        {
            'input': [9, 10, 4, 7, 5, 8, 2, 6, 1, 0, 3, 12, 11, 13],
            'expected': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            'input': [],  # Empty list
            'expected': []
        },
        {
            'input': [1],  # Single element
            'expected': [1]
        },
        {
            'input': [5, 5, 5, 5],  # List with duplicates
            'expected': [5, 5, 5, 5]
        },
        {
            'input': [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],  # List with duplicates
            'expected': [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
        }
    ]

    for i, test in enumerate(test_cases, 1):
        result = merge_sort(test['input'])
        passed = result == test['expected']
        print(f"Test {i}:")
        print(f"Input: {test['input']}")
        print(f"Expected: {test['expected']}")
        print(f"Result: {result}")
        print(f"Status: {'PASSED' if passed else 'FAILED'}")
        print("---")

if __name__ == "__main__":
    run_tests()

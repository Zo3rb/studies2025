#!/usr/bin/env python3

"""
Module: quick_sort.py
Description: Implementation of the quick sort algorithm in Python.
             Selects a pivot, partitions the array into elements less than
             and greater than or equal to the pivot, and recursively sorts
             the subarrays to produce a sorted array.
Time Complexity: O(n log n) average, O(n^2) worst case
Space Complexity: O(n)
Stability: No
"""

def quick_sort(arr):
    """
    Sorts a list using the quick sort algorithm.
    Args:
        arr (list): The input list to be sorted.
    Returns:
        list: A new sorted list in ascending order.
    """
    if len(arr) < 2:
        return arr

    pivot = arr[-1]
    left_arr = []
    right_arr = []

    for i in range(len(arr) - 1):
        if arr[i] < pivot:
            left_arr.append(arr[i])
        else:
            right_arr.append(arr[i])

    return quick_sort(left_arr) + [pivot] + quick_sort(right_arr)

def run_tests():
    """
    Runs test cases to verify the quick_sort implementation.
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
        result = quick_sort(test['input'])
        passed = result == test['expected']
        print(f"Test {i}:")
        print(f"Input: {test['input']}")
        print(f"Expected: {test['expected']}")
        print(f"Result: {result}")
        print(f"Status: {'PASSED' if passed else 'FAILED'}")
        print("---")

if __name__ == "__main__":
    run_tests()

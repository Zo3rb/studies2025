#!/bin/python3
"""
    This is an implementation of Recursive SumArray Function.
    Just for the Visualization and Study Purpose.
"""
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def sum_array(array, idx):
    """Solution."""
    # The Base Case.
    if idx == len(array) - 1:
        return array[idx]

    # The Recursive Functioning.
    return array[idx] + sum_array(array, idx + 1)

print(sum_array(nums, 0))

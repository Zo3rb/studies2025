#!/bin/python3
"""
Module to rearrange a sorted list into max/min form.
"""

def rearrange_max_min(arr):
    """
    Rearranges a sorted list into max/min form:
    [max, min, 2nd max, 2nd min, ...]
    
    Args:
        arr (List[int]): A sorted list of integers.

    Returns:
        List[int]: Rearranged list in max/min format.
    """
    result = []
    left, right = 0, len(arr) - 1

    while left <= right:
        if left != right:
            result.append(arr[right])
            result.append(arr[left])
        else:
            result.append(arr[left])
        left += 1
        right -= 1

    return result

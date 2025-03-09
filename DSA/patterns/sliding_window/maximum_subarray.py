#!/bin/python3

'''
    Problem:
    Given an array and a window size k, find the maximum sum of any contiguous subarray of size k.
'''

def max_subarray_sum(arr, k):
    '''
        Solution
    '''
    if len(arr) < k:
        return None

    max_sum = current_sum = sum(arr[:k])  # Initial window sum

    for i in range(k, len(arr)):
        current_sum += arr[i] - arr[i - k]  # Slide the window
        max_sum = max(max_sum, current_sum)

    return max_sum

# Example Usage
print(max_subarray_sum([2, 3, 5, 2, 8, 1, 5], 3))  # Output: 15
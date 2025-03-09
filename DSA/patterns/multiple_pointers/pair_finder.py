#!/bin/python3

'''
    Problem:
    Given a sorted array, determine if any two numbers sum up to a given target.
'''

def has_pair_with_sum(arr, target):
    '''Solution to Pair Finder.'''
    left, right = 0, len(arr) - 1

    while left < right:
        current_sum = arr[left] + arr[right]

        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return False

# Example Usage
print(has_pair_with_sum([1, 2, 3, 4, 6], 9))  # Output: True
print(has_pair_with_sum([1, 2, 3, 4, 6], 15)) # Output: False

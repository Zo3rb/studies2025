#!/bin/python3
"""
    This Module is to solve a simple Question

    Question
    You are given an array of Integers in which each subsequent 
    value is not less than the previous value.
    Write a function that takes this array as an input and 
    returns a new array with the squares of each number sorted in ascending order.

    Remember

Y   ou can solve this question in multiple ways.

    Think about the following -

    1.What would be the brute force way of solving this question?
      What would be the Time and Space complexity of this approach?

    2.Is there a better way to solve this with a more optimum
      Time complexity than the Brute force way?
"""

def sorted_squared(arr):
    """Docstring of the Function."""
    if len(arr) == 0:
        return arr
    return sorted([e ** 2 for e in arr])

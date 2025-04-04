#!/bin/python3

"""
    Implementation of Reverse String Algorithm.
"""

from stack import Stack

def reverse_string(input_str):
    """Implementation of the Function."""
    stack = Stack()
    reversed_str = ""

    for i in range(len(input_str)):
        stack.push(input_str[i])

    while not stack.is_empty():
        reversed_str += stack.pop()

    return reversed_str

input_str1 = "!evitacudE ot emocleW"
print(reverse_string(input_str1))
input_str2 = "Hello, World! From Reverse"
print(reverse_string(input_str2))

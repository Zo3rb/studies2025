#!/bin/python3

"""
    Implementation of Convert Integers to Binaries.
"""

from stack import Stack

def convert_int_to_bin(dec_num):
    """Implementation of the Function."""
    stack = Stack()
    bin_res = ""

    while dec_num != 0:
        if dec_num % 2 == 0:
            stack.push(0)
        else:
            stack.push(1)
        dec_num = dec_num // 2

    while not stack.is_empty():
        bin_res += str(stack.pop())

    return int(bin_res)

input_num = 242
print(convert_int_to_bin(input_num))

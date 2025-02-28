"""majority_element.py"""

def find_majority_element(arr):
    """
    Find the majority element (element that appears more than n/2 times).
    using the Frequency Counter pattern.
    """
    freq_count = {}

    for num in arr:
        freq_count[num] = freq_count.get(num, 0) + 1
        if freq_count[num] > len(arr) // 2:
            return num

    return None

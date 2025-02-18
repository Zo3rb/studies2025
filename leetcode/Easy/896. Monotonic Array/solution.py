"""Module to check if an array is monotonic."""

def is_monotonic(nums):
    """Check if the given list is monotonic.
    
    Args:
        nums (list[int]): List of integers.
    
    Returns:
        bool: True if the list is monotonic, False otherwise.
    """
    def is_mono_inc(arr):
        """Check if the array is monotonically increasing."""
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                return False
        return True

    def is_mono_dec(arr):
        """Check if the array is monotonically decreasing."""
        for i in range(len(arr) - 1):
            if arr[i] < arr[i + 1]:
                return False
        return True
    
    if not nums:
        return False
    
    return is_mono_inc(nums) or is_mono_dec(nums)

if __name__ == "__main__":
    print(is_monotonic([1, 2, 2, 3]))  # True
    print(is_monotonic([6, 5, 4, 4]))  # True
    print(is_monotonic([1, 3, 2]))  # False

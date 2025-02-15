class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        res = []
        for val in nums:
            count = 0
            for val2 in nums:
                if val > val2:
                    count += 1
            res.append(count)
        return res

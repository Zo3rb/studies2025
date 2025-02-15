class Solution:
    def countPairs(self, nums: List[int], target: int) -> int:
        res = 0

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                ans = nums[i] + nums[j]
                if ans < target:
                    res += 1

        return res

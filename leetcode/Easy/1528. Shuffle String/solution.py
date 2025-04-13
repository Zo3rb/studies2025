class Solution(object):
    def restoreString(self, s, indices):
        """
        :type s: str
        :type indices: List[int]
        :rtype: str
        """

        # Beats less than 20%
        # temp = {}
        # res = ""

        # for i in range(len(indices)):
        #     key = indices[i]
        #     val = s[i]
        #     temp[key] = val

        # for val in temp.values():
        #     res += val

        # return res

        # Beats 100%.
        res = [None] * len(s)
        for i in range(len(s)):
            res[indices[i]] = s[i]

        return "".join(res)

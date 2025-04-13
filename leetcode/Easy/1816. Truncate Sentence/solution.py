class Solution(object):
    def truncateSentence(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """
        tmp = s.split(" ")
        res = ""
        for i in range(k):
            res += tmp[i] + " "

        return res.rstrip()
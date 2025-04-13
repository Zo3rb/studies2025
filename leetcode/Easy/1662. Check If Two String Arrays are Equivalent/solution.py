class Solution(object):
    def arrayStringsAreEqual(self, word1, word2):
        """
        :type word1: List[str]
        :type word2: List[str]
        :rtype: bool
        """

        # Getting all the inputs characters.
        tmp1 = "".join(word1)
        tmp2 = "".join(word2)

        return tmp1 == tmp2
        
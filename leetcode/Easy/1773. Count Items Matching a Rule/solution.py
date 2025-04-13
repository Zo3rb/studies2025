class Solution(object):
    def countMatches(self, items, ruleKey, ruleValue):
        """
        :type items: List[List[str]]
        :type ruleKey: str
        :type ruleValue: str
        :rtype: int
        """

        rule_matrix = ["type", "color", "name"]
        ruleKey = rule_matrix.index(ruleKey)
        res = 0
        for i in range(len(items)):
            if items[i][ruleKey] == ruleValue:
                res += 1
        return res
class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        sent_list = [phrase.split(" ") for phrase in sentences]
        return max([len(phrase) for phrase in sent_list])
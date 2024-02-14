class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
#         remove trailing and lead spaces
        s = s.strip()
#     if string is empty 
        
        if not s:
          return 0
    
        words = s.split()
        return len(words[-1])
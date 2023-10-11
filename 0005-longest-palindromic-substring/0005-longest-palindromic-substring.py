class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
#         creating a helper method 
        def check(i, j):
#         pass two indices that rep
# first char s[i] and the last character be s[j-1]
            left, right = i, j - 1
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            return True

        n = len(s)
# using for loop to iterate a variable length starting from length
        for length in range(n, 0, -1):
            for start in range(n - length + 1):
                end = start + length
                if check(start, end):
                    return s[start:end]

        # If no palindrome found, return an empty string.
        return ""

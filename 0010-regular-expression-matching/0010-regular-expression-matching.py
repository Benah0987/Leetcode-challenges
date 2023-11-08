class Solution:
    def isMatch(self, s, p):
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        
        # Empty string and pattern match
        dp[0][0] = True
        
        # Fill the first row
        for i in range(1, len(p) + 1):
            if p[i - 1] == '*' and dp[0][i - 2]:
                dp[0][i] = True
        
        # Fill the rest of the matrix
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if s[i - 1] == p[j - 1] or p[j - 1] == '.':
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == '*':
                    dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] and (s[i - 1] == p[j - 2] or p[j - 2] == '.'))
        
        return dp[len(s)][len(p)]

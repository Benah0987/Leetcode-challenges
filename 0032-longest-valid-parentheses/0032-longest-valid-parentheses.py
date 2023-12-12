class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        stack = [-1]  # Initialize the stack with -1 to represent the base index
        max_length = 0

        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                # Pop the top element if it's a '('
                stack.pop()

                if not stack:
                    # If the stack is empty, push the current index as the new base
                    stack.append(i)
                else:
                    # Calculate the length of the valid parentheses substring
                    max_length = max(max_length, i - stack[-1])

        return max_length


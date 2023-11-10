class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Initialize a set to store unique characters in the current window
        char_set = set()
        
        # Initialize pointers for the start and end of the window
        start, end = 0, 0
        
        # Initialize the length of the longest substring
        max_length = 0
        
        while end < len(s):
            # If the character at the end pointer is not in the set, add it to the set
            if s[end] not in char_set:
                char_set.add(s[end])
                end += 1
                # Update the maximum length if the current substring is longer
                max_length = max(max_length, end - start)
            else:
                # If the character is already in the set, remove the character at the start pointer
                char_set.remove(s[start])
                start += 1

        return max_length

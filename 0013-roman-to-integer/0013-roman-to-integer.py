class Solution:
    def romanToInt(self, s):
#         keep the symbols in a dictionary
        roman_dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
#     a var to stoere the total value
        total = 0
        prev_value = 0
# traverse thru the array
        for char in s:
            current_value = roman_dict[char]
            if current_value > prev_value:
                total += current_value - 2 * prev_value
            else:
                total += current_value
            prev_value = current_value

        return total

# Test cases


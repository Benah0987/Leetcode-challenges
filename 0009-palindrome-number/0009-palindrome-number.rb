# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  # Handle negative numbers (they cannot be palindromes)
  return false if x < 0

  original_x = x
  reversed_x = 0

  while x > 0
    reversed_x = reversed_x * 10 + x % 10
    x /= 10
  end
  
    return original_x == reversed_x
end
  
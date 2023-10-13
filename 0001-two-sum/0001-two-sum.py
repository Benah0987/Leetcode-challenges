class Solution(object):
    def twoSum(self, nums, target):
        # Create a dictionary to store the elements and their indices
        num_dict = {}
        
        # Iterate through the array
        for i, num in enumerate(nums):
            # Calculate the complement (the value we need to reach the target)
            complement = target - num
            
            # Check if the complement is in the dictionary
            if complement in num_dict:
                # If found, return the indices of the two numbers
                return [num_dict[complement], i]
            
            # If the complement is not in the dictionary, add the current number to the dictionary
            num_dict[num] = i
        
        # If no solution is found, return an empty list or raise an error as needed
        return []

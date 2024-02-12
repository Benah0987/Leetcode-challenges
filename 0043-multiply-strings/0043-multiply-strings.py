class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        # Convert into integer and reverse 
        num1 = num1[::-1]
        num2 = num2[::-1]
        
        # Create a list to hold the result
        result = [0] * (len(num1) + len(num2))
        
        # Multiply each digit and sum up the results
        for i in range(len(num1)):
            for j in range(len(num2)):
                result[i + j] += int(num1[i]) * int(num2[j])
                result[i + j + 1] += result[i + j] // 10
                result[i + j] %= 10
        
        # Remove leading zeros from the result
        while len(result) > 1 and result[-1] == 0:
            result.pop()
        
        # Convert the result list back to string and return it
        return ''.join(map(str, result[::-1]))



        
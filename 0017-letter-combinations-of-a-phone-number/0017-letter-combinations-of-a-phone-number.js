/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // Check if the input is an empty string, return an empty array
    if (digits.length === 0) {
        return [];
    }
    
    // Mapping of digits to letters
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    // Array to store the final result
    const result = [];
    
    // Backtracking function to generate letter combinations
    const backtrack = (current, nextDigit) => {
        // If we have processed all the digits, add the current combination to the result
        if (nextDigit === digits.length) {
            result.push(current);
            return;
        }
        
        // Get the letters corresponding to the current digit
        const letters = digitMap[digits[nextDigit]];
        
        // Iterate through each letter and recursively call the backtrack function
        for (let i = 0; i < letters.length; i++) {
            backtrack(current + letters[i], nextDigit + 1);
        }
    };
    
    // Start the backtracking process with an empty current combination and the first digit
    backtrack('', 0);
    
    // Return the final result
    return result;
};
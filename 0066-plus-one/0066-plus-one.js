/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1; // Start with 1 to add
    const n = digits.length;
    
    // Iterate through the digits array starting from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        
        // Update the current digit
        digits[i] = sum % 10;
        
        // Update the carry for the next iteration
        carry = Math.floor(sum / 10);
    }
    
    // If there's still a carry after the loop, insert it as a new digit at the beginning
    if (carry > 0) {
        digits.unshift(carry);
    }
    
    return digits;
};

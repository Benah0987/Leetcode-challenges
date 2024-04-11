/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ''; // This will hold the final binary string
    let i = a.length - 1; // Pointer for string a
    let j = b.length - 1; // Pointer for string b
    let carry = 0; // This will keep track of the carry
    
    // Loop until we've gone through both strings
    while (i >= 0 || j >= 0) {
        let sum = carry; // Start with the carry from the previous operation
        if (i >= 0) {
            sum += a[i] - '0'; // Add the bit from a, if any
            i--; // Move to the next bit in a
        }
        if (j >= 0) {
            sum += b[j] - '0'; // Add the bit from b, if any
            j--; // Move to the next bit in b
        }
        
        // Carry will be 1 if the sum of the two bits is 2 or 3
        carry = Math.floor(sum / 2);
        // The current bit is the remainder of the sum divided by 2
        result = (sum % 2) + result;
    }
    
    // If there's a carry left at the end, prepend it to the result
    if (carry > 0) {
        result = carry + result;
    }
    
    return result;
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -2147483648; // -2^31
    const INT_MAX = 2147483647;  // 2^31 - 1

    let sign = Math.sign(x); // Get the sign of x
    let absReversed = parseInt(Math.abs(x).toString().split('').reverse().join('')); // Reverse the digits

    // Reapply the sign to the reversed number
    let result = sign * absReversed;

    // Check for 32-bit signed integer overflow
    if (result < INT_MIN || result > INT_MAX) {
        return 0;
    }

    return result;
};


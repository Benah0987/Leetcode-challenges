/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in mapping) {
            // If the current character is a closing bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            // If the current character is an opening bracket
            stack.push(char);
        }
    }

    // The string is valid if the stack is empty at the end
    return stack.length === 0;
};
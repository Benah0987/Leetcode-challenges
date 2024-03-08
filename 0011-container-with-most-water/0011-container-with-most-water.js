/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0; // Start pointer
    let right = height.length - 1; // End pointer
    
    while (left < right) {
        // Calculate the current area
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        // Update maxArea if the current area is larger
        maxArea = Math.max(maxArea, currentArea);
        
        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};

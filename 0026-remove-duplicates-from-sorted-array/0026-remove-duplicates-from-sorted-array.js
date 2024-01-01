/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
//     check if list is empty
    if (nums.length === 0){
        return 0
    }
//     introducing a pointer
    let i = 0;
// traverse thru the array    
    for(let j = 1; j < nums.length; j++){
         if (nums[i] !== nums[j]) {
            
            i++;
            // Update the array at the slow-runner position with the unique element
            nums[i] = nums[j];
        }
       
    }

    // The final value of i represents the count of unique elements
    // Adding 1 because array indices start from 0
    return i + 1;
};
    
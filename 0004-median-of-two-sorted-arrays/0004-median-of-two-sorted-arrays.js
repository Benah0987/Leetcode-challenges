var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
  }
//   to rep the legth of nums 1
  const m = nums1.length;
//      n to rep the length of nums 2
  const n = nums2.length;
    
//     setting up the pointers
  let low = 0;
  let high = m;

//     at this place  we are doing a binary search 
  while (low <= high) {
//       checking the partitions 
    const partitionX = (low + high) >> 1;
    const partitionY = ((m + n + 1) >> 1) - partitionX;
    
    const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    
    const minX = partitionX === m ? Infinity : nums1[partitionX];
    const minY = partitionY === n ? Infinity : nums2[partitionY];
    
    if (maxX <= minY && maxY <= minX) {
//         checking if the length is even or odd
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
  
  throw new Error("Input arrays are not sorted.");
};

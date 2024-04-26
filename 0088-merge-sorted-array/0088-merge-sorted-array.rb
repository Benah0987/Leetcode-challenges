# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)
#     pointers will track the current positions while merging.
  ptr1 = m - 1
  ptr2 = n - 1
#     pointer will be used to place elements in the merged array.
  ptr_merged = m + n - 1
    
# Compare elements at the two pointers
  while ptr1 >= 0 && ptr2 >= 0
    if nums1[ptr1] > nums2[ptr2]
      nums1[ptr_merged] = nums1[ptr1]
      ptr1 -= 1
    else
      nums1[ptr_merged] = nums2[ptr2]
      ptr2 -= 1
    end
    ptr_merged -= 1
  end
#     Place the larger element at the position pointed by the third pointe

  # If there are remaining elements in nums2, copy them to nums1
  while ptr2 >= 0
    nums1[ptr_merged] = nums2[ptr2]
    ptr2 -= 1
    ptr_merged -= 1
  end
end

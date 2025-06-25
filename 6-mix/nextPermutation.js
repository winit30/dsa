function nextPermutation(nums) {
  let i = nums.length - 2;

  // Step 1: Find the first decreasing element from the end
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // Step 2: Find the next greater element from the end
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    // Swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 3: Reverse from i+1 to end
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  console.log(nums, i);
  return nums;
}

nextPermutation([1, 3, 2, 4, 6, 6, 5, 0]);

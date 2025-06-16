function containsNearbyDuplicate(nums, k) {
  let numsMap = new Map();
  let minimumDuplicate = Infinity;

  for (let end = 0; end < nums.length; end++) {
    const num = nums[end];
    if (numsMap.has(num)) {
      if (end - numsMap.get(num) < minimumDuplicate) {
        minimumDuplicate = end - numsMap.get(num);
      }
      numsMap.set(num, end);
    } else {
      numsMap.set(num, end);
    }
  }
  return minimumDuplicate;
}

console.log(containsNearbyDuplicate([9, -6, 3, 0, -3, -6, 9], 5));

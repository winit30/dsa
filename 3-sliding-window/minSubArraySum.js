function minSubArraySum(target, nums) {
  let start = 0;
  let minLength = Infinity;
  let sum = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
      }
      sum -= nums[start];
      start++;
    }
  }

  return minLength;
}

console.log("result", minSubArraySum(7, [2, 3, 1, 2, 4, 3]));

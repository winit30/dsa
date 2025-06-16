function findMaxAverage(nums, k) {
  let sum = 0;
  let average = -Infinity;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  average = sum / k;

  for (let j = 1; j < nums.length - k + 1; j++) {
    console.log(j, j + k);
    sum -= nums[j - 1];
    sum += nums[j + k - 1];

    average = Math.max(average, sum / k);
  }

  return average;
}

console.log("res", findMaxAverage([2, 4, 6, 8, 10, 1], 4));

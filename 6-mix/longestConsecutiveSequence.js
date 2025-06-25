var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let longest = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let currentSum = num;
      let currentStreak = 1;

      while (numsSet.has(currentSum + 1)) {
        currentSum += 1;
        currentStreak += 1;
      }
      longest = Math.max(longest, currentStreak);
    }
  }
  return longest;
};

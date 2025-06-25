function canJump(nums) {
  let canJumpTillIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > canJumpTillIndex) return false;

    canJumpTillIndex = Math.max(canJumpTillIndex, i + nums[i]);

    if (canJumpTillIndex >= nums.length - 1) return true;
  }
  return true;
}

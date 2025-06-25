function houseRobber(nums) {
  console.log(nums);
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let firstHouse = nums[0];
  let currentHouse = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = Math.max(currentHouse, firstHouse + nums[i]);
    firstHouse = currentHouse;
    currentHouse = temp;
  }
  return currentHouse;
}

function houseRobberTwo(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const rob1 = houseRobber(nums.slice(1));
  const rob2 = houseRobber(nums.slice(0, nums.length - 1));

  return Math.max(rob1, rob2);
}

console.log(houseRobberTwo([1, 2, 3, 1]));

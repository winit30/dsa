function slidingWindowMaximum(nums, w) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Here i is head of window and w is tail something like this w---i
    // which means if value of i = 3 then the current window will be i - w + 1 whcih is 3 - 1 + 1 from index 1 to 3 => [1,2,3]
    // where 1 is tail and 3 is head
    // check if the front left of deque has any index which is behind the current window
    // FYI we are storing index in deque so deque[0] will return index only and deque[0] is also the left front face

    while (deque.length && deque[0] < i - w + 1) {
      //remove old index from front left
      deque.shift();
    }

    // Remove smaller indices from the range
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= w - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

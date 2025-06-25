const majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

majorityElement([1, 3, 1, 3, 3, 2, 3]);

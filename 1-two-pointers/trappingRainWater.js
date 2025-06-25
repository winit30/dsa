/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let left = 0;
  let right = n - 1;
  let answer = 0;

  let leftMaxHeight = 0,
    rightMaxHeight = 0;

  while (left < right) {
    leftMaxHeight = Math.max(leftMaxHeight, height[left]);
    rightMaxHeight = Math.max(rightMaxHeight, height[right]);

    if (leftMaxHeight < rightMaxHeight) {
      answer += leftMaxHeight - height[left];
      left++;
    } else {
      answer += rightMaxHeight - height[right];
      right--;
    }
  }
  return answer;
};

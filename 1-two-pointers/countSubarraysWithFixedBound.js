/*

Statement
Given an integer array, nums, and two integers minK and maxK, return the number of fixed-bound subarrays.

A subarray in nums is called a fixed-bound subarray if it satisfies the following conditions:

The smallest value in the subarray equals minK.

The largest value in the subarray equals maxK.

Note: A subarray is a contiguous sequence of elements within an array.

*/

function countSubarraysWithFixedBound(nums, minK, maxK) {
    let lastMin = -1
    let lastMax = -1
    let leftBound = -1
    let count = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < minK || nums[i] > maxK) {
            leftBound = i
        }
        if (nums[i] === minK) lastMin = i;
        if (nums[i] === maxK) lastMax = i;

        count += Math.max(o, Math.min(lastMin, lastMax) - leftBound)
    }

    return count
}
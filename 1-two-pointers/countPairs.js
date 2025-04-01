/**
 * Count Pairs Whose Sum is Less than Target
 * You are given a 0-indexed integer array, nums, of length n, and an integer 'target'. 
 * Your task is to determine the number of distinct pairs of indexes (i, j) such that:
 * 0≤i<j<n 
 */

function countPairs(nums, target) {
    nums.sort((a,b) => {
        return a - b
    })

    let low = 0
    let high = nums.length - 1
    let count = 0

    while (low < high) {
        if(nums[low] + nums[high] >= target) {
            high--
        } else if(nums[low] + nums[high] < target) {
            count += high - low;
            low++
        } 
    }
    return count
}

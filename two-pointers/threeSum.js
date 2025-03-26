/**
 * Given an integer array nums, find and return all unique triplets [nums[i], nums[j], nums[k]], where the indexes satisfy 
 * i != j, i != k, j != k, and the sum of the elements nums[i] + nums[j] + nums[k] == 0.
 */

const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {

    nums.sort(function(a,b) {
        return a - b
    })
    const result = []
    const len = nums.length

    if(n[0] > 0) {
        return result;
    }

    for(let i = 0; i < len - 2; i++) {

        let left = i + 1
        let right = len - 1

        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                result.push([i, left, right])
                left++
                right--

                while(left < right && nums[left] === nums[left - 1]) {
                    left++
                }
                while(left < right && nums[right] === nums[right + 1]) {
                    right--
                }
            } else if(sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return result
}

threeSum(nums)
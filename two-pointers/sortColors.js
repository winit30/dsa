/**
 * Given an array, colors, which contains a combination of the following three elements: 
 * 
 * 0 (representing red)
 * 1 (representing white)
 * 2 (representing blue)
 * 
 * Sort the array in place so that the elements of the same color are adjacent, with the colors 
 * in the order of red, white, and blue. To improve your problem-solving skills, do not utilize 
 * the built-in sort function.
 */


function sortColors(nums) {

    let low = 0
    let mid = 0
    let high = nums.length - 1

    while(mid <= high) {
        if(nums[mid] === 0) {
            let temp = nums[low]
            nums[low] = nums[mid]
            nums[mid] = temp
            mid++
            low++
        } else if (nums[mid] === 1) {
            mid++
        } else if (nums[mid] === 2) {
            let temp = nums[high]
            nums[high] = nums[mid]
            nums[mid] = temp
            high--
        }
    }
    return nums
}

console.log(sortColors([1, 2, 0, 2, 0, 1]))

/**
 * Dry run
 * 
 * 1 Iteration 
 * low = 0, mid = 1, high = 5 
 * [1, 2, 0, 2, 0, 1]
 * 
 * 2 Iteration
 * low = 0, mid = 1, high = 4 
 * [1, 1, 0, 2, 0, 2]
 * 
 * 3 Iteration
 * low = 0, mid = 2, high = 4 
 * [1, 1, 0, 2, 0, 2]
 * 
 * 4 Iteration
 * low = 1, mid = 3, high = 4 
 * [0, 1, 1, 2, 0, 2]
 * 
 * 5 Iteration
 * low = 1, mid = 3, high = 3
 * [0, 1, 1, 0, 2, 2]
 * 
 * 6 Iteration
 * low = 2, mid = 4, high = 3
 * [0, 0, 1, 1, 2, 2]
 */
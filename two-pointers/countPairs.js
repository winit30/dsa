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

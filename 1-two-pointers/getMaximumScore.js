/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getMaximumScore = function(nums1, nums2) {
    let i = 0
    let j = 0
    let sum1 = 0
    let sum2 = 0
    let result = 0

     const MOD = 1000000007;

    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            sum1 += nums1[i]
            i++
        } else if (nums1[i] > nums2[j]) {
            sum2 += nums2[j]
            j++
        } else {
            result += Math.max(sum1, sum2) + nums1[i]

            sum1 = 0
            sum2 = 0

            i++
            j++
        }
    }

    while(i < nums1.length) {
        sum1 += nums1[i]
        i++
    }

    while(j < nums2.length) {
        sum2 += nums2[j]
        j++
    }

    result += Math.max(sum1, sum2)

    return result % MOD
};
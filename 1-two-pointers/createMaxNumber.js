function createMaxNumber(nums1, nums2, k) {

    // create max sub sequence 
    function maxSubSequence(nums, size) {

        let stack = []
        let drop = nums.length - size

        for(const num of nums) {
            while(drop > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
                
                stack.pop()
                drop--
            }
            stack.push(num)
        }
        return stack.slice(0, size)

    }

    function greater(a, indexA, b, indexB) {

        while(indexA < a.length && indexB < b.length && a[indexA] == b[indexB]) {
            indexA++
            indexB++
        }

        if(indexB === b.length) return true
        if(indexA === a.length) return false 

        return a[indexA] > b[indexB]
    }

    function merge(a, b) {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < a.length || j < b.length) {
            if (greater(a, i, b, j)) {
                result.push(a[i++]);
            } else {
                result.push(b[j++]);
            }
        }

        return result;
    }

    let start = Math.max(0, k - nums2.length) // 0
    let end = Math.min(k, num1.length)

    let result = []

    for(let i = start; i <= end; i++) {

        let a = maxSubSequence(num1, i)
        let b = maxSubSequence(nums2, k - i)

        let candidate = merge(a, b) 

        if(greater(candidate, 0, result, 0)) {
            result = candidate
        }
    }

    return result

}

let x = [2, 4, 3, 6]
let y = [4, 5, 7, 6, 8]
let k = 7

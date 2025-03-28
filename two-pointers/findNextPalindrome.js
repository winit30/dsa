


function findNextPalindrome(numStr) {
    let n = numStr.length

    if(n === 1) {
        return ""
    }

    let halfLength = Math.floor(n/2)
    let leftHalf = numStr.slice(0, halfLength).split('')

    if(!findNextPermutation(leftHalf)) {
        return ""
    }

    let nextPalindrome;
    if(n % 2 === 0) {
        nextPalindrome = leftHalf.join('') + leftHalf.slice().reverse().join('')
    } else {
        nextPalindrome = leftHalf.join('') + numStr[halfLength] + leftHalf.slice().reverse().join('')
    }

    return nextPalindrome
}

function findNextPermutation(digits) {
    let i = digits.length - 2

    while(i >= 0 && digits[i] >= digits[i + 1]) {
        i--
    }

    if(i === -1) {
        return false
    }

    let j = digits.length - 1

    while(digits[j] < digits[i]) {
        j--
    }

    [digits[i], digits[j]] = [digits[j], digits[i]]

    let left = i + 1
    let right = digits.length - 1
    while(left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]]
        left++
        right--
    }

    return true
}

console.log(findNextPalindrome('45321012354'))
/**
 * Valid Palindrome II
 * Write a function that takes a string as input and checks whether it can be a valid palindrome by 
 * removing at most one character from it.
 */

function isPalindrome(str) {
    let left = 0
    let right = str.length - 1

    while(left < right) {
        if(str[left] !== str[right]) {
            return validPalindrome(str, left + 1, right) || validPalindrome(str, left, right + 1)
        }
        left++
        right--
    }
    return true
}

function validPalindrome(str, left, right) {
    while(left < right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isPalindrome('abca'))
console.log(isPalindrome('madame'))
console.log(isPalindrome('dead'))
console.log(isPalindrome('tebbem'))
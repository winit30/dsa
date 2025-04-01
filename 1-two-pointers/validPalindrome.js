/**
 * Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.
 * Note: A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.
 */

function isPalindrome(s) {

    let p1 = 0;
    let p2 = s.length - 1

    while(p1 <= p2) {
        if(s[p1] === s[p2]) {
            p1++
            p2--
        } else {
            return false
        }
    }
    return true
}
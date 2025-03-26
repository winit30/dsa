function reverseWordsInString(sentence) {

    // split the sentence in an array
    const str = sentence.trim().split('')
    
    // reverse the whole array
    reverse(str, 0, str.length - 1)

    // reverse each word
    let start = 0
    for(let end = 0; end <= str.length; end++) {
        if(str[end] === ' ' || end === str.length) {
            reverse(str, start, end - 1)
            start = end + 1
        }
    }

    //remove extra spaces with spit and join again 
    return str.join('').split(/\s+/).join(' ')

}

function reverse(arr, left, right) {
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}

console.log(reverseWordsInString('My name    is Vineet     Mishra'))
/**
## Find the Lexicographically Largest String From Box II

You are given a string, word, and an integer numFriends, representing the number of friends participating in a game organized by Alice.

The game consists of multiple rounds, and in each round:

The string word is split into exactly numFriends non-empty substrings.

The split must be unique; no previous round has produced the same sequence of splits.

All resulting substrings from the split are placed into a box.

When all rounds are over and all possible unique splits have been performed, determine the lexicographically largest string among all the substrings in the box.

*/


function lexicographicallyLargestString(word, numFreinds) {

    let maxLengthOfSubstring = word.length - numFreinds + 1
    let result = ""

    for(let i = 0; i < word.length; i++) {
        let subString = word.slice(i, maxLengthOfSubstring + i)

        if(result < subString) {
            result = subString
        }
    }

    return result

}

console.log(lexicographicallyLargestString("abcd", 2))
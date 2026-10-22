// Valid Word Abbreviation 

// Statement
// A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their respective lengths. The numeric replacements must not contain leading zeros.

// Given a string word and an abbreviation abbr, determine whether abbr is a valid abbreviation of word.

// The abbreviation abbr consists of lowercase English letters and numeric values. Each numeric value in abbr represents the number of characters skipped in word. 
// Letters in abbr must match the corresponding characters in word exactly. 
// The abbreviation is valid if and only if it fully accounts for every character in word from left to right with no characters remaining or missing.

// Note: A numeric value in abbr must not have leading zeros (e.g., "01" is invalid). A value of "0" is also invalid since it would represent replacing an empty substring.

// Example: word = innovation, abbr = in5ion
// By replacing the "5" in abbreviation "in5ion" with "novat", we form the given word "innovation"


function validWordAbbreviation(word, abbr) {

    let i = 0, j = 0

    while(i < word.length && j < abbr.length) {
        if(abbr[j] >= '0' & abbr[j] <= '9') {
            if(abbr[j] == '0') {
                return false
            }

            let num = 0;
            while(j < abbr.length && abbr[j] >= '0' && abbr[j] <= '9') {
                num = num * 10 + (abbr[j] - '0')
                j++
            }
            i = i + num
        } else {
            if(word[i] !== abbr[j]) return false;
            i++
            j++
        }
    }

    return (i === word.length && j === abbr.length)

}

console.log(validWordAbbreviation("internationalization", "i12iz4n"))

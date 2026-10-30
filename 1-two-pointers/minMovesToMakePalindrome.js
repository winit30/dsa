/*

function minMovesToMakePalindrome(str) {

    //split the string to array to make in place swapings
    const strArr = str.split('');

    let moves = 0
    let left = 0
    let right = strArr.length - 1

    while(left < right) {
        let iterator = right

        while(left < iterator) {

            if(strArr[left] === strArr[iterator]) {

                while(iterator < right) {
                    [strArr[iterator], strArr[iterator + 1]] = [strArr[iterator + 1], strArr[iterator]]
                    moves++
                    iterator++
                }

                right--
                break
            } 
            iterator--
        }

        if(left === iterator) {
            moves += Math.floor(strArr.length/2) - left
        }
        left++
    }

    return moves

}
    
*/



function minMovesToMakePalindrome(str) {
    
    let moves = 0
    let left = 0
    let right = str.length - 1

    while(left < right) {
        
        let iterator = right 

        while(left < iterator && str[left] != str[iterator]) {
            iterator--
        }

        if (left === iterator) {
            // no matching char found
            // move the unmatched char one step towards center
            [str[left], str[left + 1]] = [str[left + 1], str[left]]
            moves++
        } else {
            // Move the matching character to the right
            while(iterator < right) {
                [str[iterator], str[iterator + 1]] = [str[iterator + 1], str[iterator]] 
                moves++
                iterator++
            }
            
            // Both chars now matched
            left++
            right--
        }
    }
    return moves
}

console.log(minMovesToMakePalindrome('nono'))
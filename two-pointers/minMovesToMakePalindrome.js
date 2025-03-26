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

console.log(minMovesToMakePalindrome('nono'))
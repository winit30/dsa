function isHappyNumber(n) {
  
    function sumOfSquaredDigits(number) {
        let totalSum = 0
        while(number > 0) {
            const lastDigit = number % 10
            number= Math.floor(number / 10)
            totalSum += lastDigit ** 2
        }
        return totalSum
    }
    
    let slowPointer = n
    let fastPointer = sumOfSquaredDigits(n)
    
    while(fastPointer !== 1 && fastPointer !== slowPointer) {
        slowPointer = sumOfSquaredDigits(slowPointer)
        fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer))
    }
    
    if(fastPointer === 1) {
        return true
    } 
    
    return false;
}
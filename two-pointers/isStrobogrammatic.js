function isStrobogrammatic(str) {
    const dict = {
        "0": "0",
        "1": "1",
        "8": "8",
        "6": "9",
        "9": "6"
    }

    let left = 0
    let right = str.length - 1

    while(left <= right) {
        if(!dict[str[left]] || dict[str[left]] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

console.log(isStrobogrammatic("619"))
console.log(isStrobogrammatic("888"))
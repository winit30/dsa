function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const indexOfNum = arr[i] - 1;
    if (arr[indexOfNum] === arr[i]) {
      i++;
    } else {
      let temp = arr[indexOfNum];
      arr[indexOfNum] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(cyclicSort([2, 1, 4, 3, 0]));

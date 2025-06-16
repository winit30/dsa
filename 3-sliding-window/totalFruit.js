function totalFruit(fruits) {
  let start = 0;
  let res = 0;
  let current = 0;
  let fruitMap = new Map();

  for (let end = 0; end < fruits.length; end++) {
    const currFruit = fruits[end];

    if (current <= 2) {
      if (!fruitMap.has(currFruit)) {
        fruitMap.set(currFruit, end);
        current++;
      }
      res = Math.max(res, end - start + 1);
    }

    while (current > 2) {
      fruitMap.delete(fruits[start]);
      start++;
      current--;
    }
  }
  return res;
}

console.log("res", totalFruit([1, 2, 2, 2, 1, 2]));

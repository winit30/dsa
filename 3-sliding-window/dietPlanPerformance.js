function dietPlanPerformance(calories, k, lower, upper) {
  let result = 0;
  let totalCal = 0;
  // count initial

  for (let i = 0; i < k; i++) {
    totalCal += calories[i];
  }

  if (totalCal < lower) {
    result--;
  } else if (totalCal > upper) {
    result++;
  }

  for (let j = 1; j < calories.length - k + 1; j++) {
    totalCal += calories[j + k - 1] - calories[j - 1];
    if (totalCal < lower) {
      result--;
    } else if (totalCal > upper) {
      result++;
    }
  }

  return result;
}

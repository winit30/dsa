function climbingStairs(n) {
  let twoStepsBefore = 1; // there is one way to climb the first Stare
  let oneStepBefore = 2; // there are two ways to climb the second Stare
  let ways = 0;

  for (let i = 3; i <= n; i++) {
    ways = twoStepsBefore + oneStepBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = ways;
  }

  return ways;
}

console.log(climbingStairs(5));

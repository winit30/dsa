function decodeWays(number) {
  const memo = new Map();

  function dfs(index) {
    if (index === number.length) {
      return 1;
    }

    if (number[index] === "0") {
      return 0;
    }

    if (memo.has(index)) return memo.get(index);

    let ways = dfs(index + 1);

    if (
      index + 1 < number.length &&
      parseInt(number.slice(index, index + 2)) <= 26
    ) {
      ways += dfs(index + 2);
    }
    memo.set(index, ways);
    return ways;
  }

  return dfs(0);
}

// function numDecodings(s) {
//   if (!s || s[0] === "0") return 0;

//   const n = s.length;
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 1; // base case for empty string
//   dp[1] = s[0] !== "0" ? 1 : 0;

//   // console.log(dp);

//   for (let i = 2; i <= n; i++) {
//     let oneDigit = parseInt(s[i - 1]);
//     let twoDigit = parseInt(s.slice(i - 2, i));

//     if (oneDigit >= 1) {
//       console.log(dp);
//       dp[i] += dp[i - 1];
//       console.log(dp);
//     }

//     if (twoDigit >= 10 && twoDigit <= 26) {
//       dp[i] += dp[i - 2];
//     }
//   }

//   return dp[n];
// }

// numDecodings("122016");

// //122016

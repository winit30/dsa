function uniquePath(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

function uniquePaths(m, n) {
  function dfs(i, j) {
    // Out of bounds
    if (i >= m || j >= n) return 0;

    // Destination reached
    if (i === m - 1 && j === n - 1) return 1;

    // Move down and right
    return dfs(i + 1, j) + dfs(i, j + 1);
  }

  return dfs(0, 0);
}

// const a = [
//   [1, 1, 1],
//   [1, 2, 3],
//   [1, "?", "?"],
// ];

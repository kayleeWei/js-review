// ```
// for i in [1...N]
//   for w in [1..W]
//     dp[i][w] = Math.max(
//       dp[i-1][w],
//       dp[i - 1][w - wt[i - 1]] + val[i - 1]
//     )
// ```

function knapsack(W, N, wt = [], val = []) {

  const dp = Array.from(new Array(N + 1), () => new Array(W + 1).fill(0));

  for(let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      if(w - wt[i - 1] < 0) {
        dp[i][w] = dp[i - 1][w];
      } else {
        dp[i][w] = Math.max(
          dp[i-1][w],
          dp[i - 1][w - wt[i - 1]] + val[i - 1]
        )
      }

    }
  }

  return dp[N][W];
}

const W = 4;
const N = 3;
const wt = [2, 1, 3];
const val = [4, 2, 3];

console.log(knapsack(W, N, wt, val))
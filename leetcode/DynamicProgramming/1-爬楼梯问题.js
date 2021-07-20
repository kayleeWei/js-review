/**
 * @param {number} n
 * @return {number}
 */

//  https://leetcode-cn.com/problems/climbing-stairs/
// 递归可转为动态规划问题，减小时间复杂度
var climbStairs = function(n) {
  if (n <= 2) return n;
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
/**
 * @param {number[]} cost
 * @return {number}
 */
//  https://leetcode-cn.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function(cost) {
  const size = cost.length;
  const dp = new Array(size);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for(let i = 2; i < size; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[size - 1], dp[size - 2]);

};
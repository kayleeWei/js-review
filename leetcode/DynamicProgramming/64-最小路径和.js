/**
 * @param {number[][]} grid
 * @return {number}
 */
//  https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode-solution/
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
var minPathSum = function(grid) {
  if (!grid || !grid.length || !grid[0].length) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const dp = new Array(rows);
  for (let i = 0; i < rows; i++) {
    dp[i] = new Array(cols);
  }

  dp[0][0] = grid[0][0];
  for(let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for(let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for(let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[rows - 1][cols - 1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
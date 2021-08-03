/**
 * @param {number} n
 * @return {string[]}
 */
//  https://leetcode-cn.com/problems/generate-parentheses/solution/gua-hao-sheng-cheng-by-user7746o/
// 算法策略： 回溯算法是一种搜索法，试探法，它会在每一步做出选择，一旦发现这个选择无法得到期望结果，就回溯回去，重新做出选择。深度优先搜索利用的就是回溯算法思想。

// 对应于本题，我们可以每次试探增加 ( 或 ) ，注意：

// 加入 ( 的条件是，当前是否还有 ( 可以选择

// 加入 ) 的时候，受到 ( 的限制，如果已选择的结果里的 ( 小于等于已选择里的 ) 时，此时是不能选择 ) 的，例如如果当前是 () ，继续选择 ) 就是 ()) ，是不合法

// n=1时， dfs('(', 1, 0)和 dfs(')', 0, 1) return => dfs('((', 2, 0) return 和 dfs('()', 1, 1)
var generateParenthesis = function(n) {
  const res = [];
  const dfs = (path, left, right) => {
    if (left > n || right > left) return;
    if (left + right === 2 * n) {
      res.push(path);
      return;
    }

    dfs(path + '(', left + 1, right);
    dfs(path + ')', left, right + 1);
  }
  dfs('', 0, 0);
  return res;
};
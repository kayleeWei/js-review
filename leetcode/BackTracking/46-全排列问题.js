/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const used = {};

  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.concat([]));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path); // 基于选了当前的数，递归
      path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false; // 撤销这个记录
    }
  }

  dfs([]);
  return res;
};
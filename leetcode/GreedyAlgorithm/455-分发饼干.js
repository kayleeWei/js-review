/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
//  输入: g = [1,2,3], s = [1,1]
//  输出: 1
//  解释: 
//  你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
//  虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
//  所以你应该输出1。
// https://leetcode-cn.com/problems/assign-cookies/
 
var findContentChildren = function(g, s) {
  if (!g.length || !s.length) return 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  while(i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++;
    }
    j++;
  }

  return i;
};

console.log(findContentChildren([1, 2, 3], [1, 1]))
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  输入: [1,2,3,3,4,4,5,5]
//  输出: True
//  解释:
//  你可以分割出这样两个连续子序列 : 
//  1, 2, 3, 4, 5
//  3, 4, 5
// https://leetcode-cn.com/problems/split-array-into-consecutive-subsequences/solution/tan-xin-suan-fa-jian-cha-shu-zu-neng-fou-bei-fen-w/
var isPossible = function(nums) {
  const count = {};
  const tail = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }
  console.log(count)

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (count[num] === 0) {
      continue;
    } else if (count[num] > 0 && tail[num - 1] > 0) {
      count[num]--;
      tail[num - 1]--;
      tail[num] = typeof tail[num] !== 'undefined' ? ++tail[num] : 1;
    } else if (count[num] > 0 && count[num + 1] > 0 && count[num + 2] > 0) {
      count[num]--;
      count[num + 1]--;
      count[num + 2]--;
      tail[num + 2] = typeof tail[num + 2] !== 'undefined' ? ++tail[num + 2] : 1;
    } else {
      return false
    }
  }
  return true;
};

console.log(isPossible([1,2,3,3,4,4,5,5]))
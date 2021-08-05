/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  https://leetcode-cn.com/problems/two-sum/solution/jie-suan-fa-1-liang-shu-zhi-he-by-guanpengchn/
// 比如[2, 7, 11, 15], target = 13
// map { 2: 0, 7: 1 } 13 -11 = 2 则返回下标
var twoSum = function(nums, target) {
  // 没用到的数字都存在map里，key是这个数，value是需要返回的值，比如index
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[target - num] !== undefined) {
      return [map[target - num], i];
    } else {
      map[num] = i;
    }
  }
};

console.log(twoSum([2,7,11,15], 9))
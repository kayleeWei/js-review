/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

//  注意：答案中不可以包含重复的三元组。
var threeSum = function(nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return res;  // 如果当前数字大于0，则三数之和一定大于0，所以结束循环

    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        while(nums[L] === nums[L + 1]) L++; // 去重
        while(nums[R] === nums[R - 1]) R--; // 去重
        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else if (sum < 0) {
        L++;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
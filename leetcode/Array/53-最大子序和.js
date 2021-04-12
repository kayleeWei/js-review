/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
  }
  return Math.max(...nums)
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums), nums)
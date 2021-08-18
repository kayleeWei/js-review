/**
 * @param {number[]} nums
 * @return {number}
 */
//  https://leetcode-cn.com/problems/valid-triangle-number/solution/teng-xun-leetcode611you-xiao-san-jiao-xing-de-ge-s/
// 排序 + 双指针
var triangleNumber = function(nums) {
  if (!nums || nums.length < 3) return 0;
   
  let count = 0;
  // 先排序
  nums.sort((a, b) => a - b);

  // 最长的边作为第三条边，利用双指针法判断其余边
  for (let n = nums.length - 1; n > 1; n--) {
    let i = 0;
    let j = n - 1;

    while(i < j) {
      if (nums[i] + nums[j] > nums[n]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//  输入：nums1 = [1,2,2,1], nums2 = [2,2]
//  输出：[2]
var intersection = function(nums1, nums2) {
  const commonArr = nums1.filter(item => nums2.includes(item));
  return [...new Set(commonArr)];
};
console.log(intersection([1,2,2,1], [2,2]))

/**
 * @param {number[]} height
 * @return {number}
 */
 https://leetcode-cn.com/problems/container-with-most-water/
 var maxArea = function(height) {
  var i = 0;  // 左端
  var j = height.length-1;  // 右端
  var maxArea = 0;  // 记录最大面积
  var currentArea;  // 记录当前面积
  while(i<j) {
      currentArea = Math.min(height[i], height[j])*(j-i);  // 计算当前面积
      if(currentArea>maxArea) maxArea = currentArea;  // 若当前面积大于最大面积则替换
      // 高度较小一端向中间移动
      if(height[i]<height[j]) i++;
      else j--;
  }
  return maxArea;
};

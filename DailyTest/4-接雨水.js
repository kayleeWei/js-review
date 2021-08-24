/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxArea = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    let curArea = Math.min(height[i], height[j]) * (j - i);

    maxArea = Math.max(maxArea, curArea);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
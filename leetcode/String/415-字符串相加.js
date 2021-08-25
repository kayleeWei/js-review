/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//  https://leetcode-cn.com/problems/add-strings/solution/zi-fu-chuan-xiang-jia-by-leetcode-solution/
var addStrings = function(num1, num2) {
  let ans = [];
  let i = num1.length - 1;
  let j = num2.length - 1;
  let add = 0; // 记录是否有进位

  while(i >= 0 || j >= 0 || add !== 0) {
    const x = num1.charAt(i) ? num1.charAt(i) - 0 : 0;
    const y = num2.charAt(j) ? num2.charAt(j) - 0 : 0;

    const sum = x + y + add;
    ans.unshift(sum % 10);
    add = Math.floor(sum / 10);

    i--;
    j--;
  }

  return ans.join('');
};

console.log(addStrings('1', '9'))
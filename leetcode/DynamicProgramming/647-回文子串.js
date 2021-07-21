/**
 * @param {string} s
 * @return {number}
 */
//  https://leetcode-cn.com/problems/palindromic-substrings/solution/647-hui-wen-zi-chuan-dong-tai-gui-hua-zh-6f7n/
// dp
var countSubstrings = function(s) {
   const size = s.length;
   const dp = new Array(size);
   for(let i = 0; i < size; i++) {
      dp[i] = new Array(size).fill(false);
   }
   let result = 0;

   // 从下往上，从左往右遍历上三角矩阵
   for(let i = size - 1; i >= 0; i--) {
      for(let j = i; j < size; j++) {
         if (i === 4 && j === 5) {
            console.log(dp[i][j])
         }
         if (s[i] === s[j]) {
            if (j - i <= 1) {
               result++;
               dp[i][j] = true;
            } else if (dp[i + 1][j - 1]) {
               result++;
               dp[i][j] = true;
            }
         }
      }
   }
   return result;
};

// 中心扩展法
// https://leetcode-cn.com/problems/palindromic-substrings/solution/hui-wen-zi-chuan-by-leetcode-solution/
var countSubstrings = function(s) {
   let result = 0;
   const size = s.length;

   // 一共有 2 * size - 1 个中心，回文中心左右的起始位置分别为⌊2/i⌋, ⌊2/i⌋ + (i mod 2)
   for(let i = 0; i < 2 * size - 1; i++) {
      let l = Math.floor(i / 2);
      let r = Math.floor(i / 2) + i % 2;

      while(l >= 0 && r < size && s[l] === s[r]) {
         l--;
         r++;
         result++;
      }
   }

   return result;
}


console.log(countSubstrings('fdsklf'))
/**
 * @param {string} s
 * @return {number}
 */
//  https://leetcode-cn.com/problems/palindromic-substrings/solution/647-hui-wen-zi-chuan-dong-tai-gui-hua-zh-6f7n/
var countSubstrings = function(s) {
   const size = s.length;
   const dp = new Array(size);
   for(let i = 0; i < size; i++) {
      dp[i] = new Array(size).fill(false);
   }
   let result = 0;

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

console.log(countSubstrings('fdsklf'))
/**
 * @param {string} s
 * @return {string}
 */
// dp
var longestPalindrome = function(s) {
  if (s.length < 2) return s;


  const size = s.length;
  let res = s[0];
  const dp = new Array(size);
  for (let i = 0; i < size; i++) {
    dp[i] = new Array(size).fill(false);
  }

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true;
        }
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }

  return res;
};

// 中心扩展法
var longestPalindrome2 = function(s) {
  const size = s.length;
  if (size < 2) return s;

  let res = s[0];
  for (let i = 0; i < size; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  function expandAroundCenter(l, r){
    while(l >= 0 && r < size && s[l] === s[r]) {
      l--;
      r++;
    }
    // 注意此处l,r的值循环完后  是恰好不满足循环条件的时刻
    // 此时l到r的距离为r-l+1，但是lr两个边界不能取 所以应该取l+1到r-1的区间  长度是r-l-1
    if (r - l - 1 > res.length) {
      res = s.substring(l + 1, r)
    }
  }

  return res;
}

console.log(longestPalindrome('cbbd'))
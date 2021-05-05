/**
 * @param {string} s
 * @return {number}
 */

//  https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const hashObj = new Set();
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let pointer = -1;
  let ans = 0; // 存最长子串的长度

  for(let i = 0; i< s.length; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      hashObj.delete(s.charAt(i - 1));
    }

    while(pointer + 1 < s.length && !hashObj.has(s.charAt(pointer + 1))) {
      // 不断地移动右指针
      hashObj.add(s.charAt(pointer + 1));
      pointer++;
    }

    // 第 i 到 pointer 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, pointer - i + 1);
  }

  return ans;
};

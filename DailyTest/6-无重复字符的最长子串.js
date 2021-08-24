var lengthOfLongestSubstring = function(s) {
  const hashObj = new Set();
  let pointer = -1;
  let ans = 0;

  for(let i = 0; i < s.length; i++) {
    if (i !== 0) {
      hashObj.delete(s.charAt(i - 1));
    }

    while(pointer + 1 < s.length && !hashObj.has(s.charAt(pointer + 1))) {
      pointer++;
      hashObj.add(s[pointer]);
    }

    ans = Math.max(ans, pointer - i + 1);
  }

  return ans;
}
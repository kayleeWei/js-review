// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 链接：https://leetcode-cn.com/problems/valid-parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let sArr = s.split('');
  let len = sArr.length;
  if (len % 2) return false;

  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stack = [];

  for (let i = 0; i < len; i++) {
    if (map.get(s[i])) {
      if (stack[stack.length - 1] !== map.get(s[i])) return false;
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length
};


console.log(isValid('()'))

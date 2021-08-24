function longestCommonPrefix(strArr) {
  if (!strArr.length) return '';
  let prefix = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    let j = 0;
    for (; j < prefix.length && j < strArr[i].length; j++) {
      if (prefix[j] !== strArr[i][j]) {
        break;
      }
    }
    prefix = prefix.substr(0, j);

    if (!prefix.length) return '';
  }
  return prefix;
}
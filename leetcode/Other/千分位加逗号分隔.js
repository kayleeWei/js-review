function addComma (intNum) {
  let num = String(intNum).split('');
  const len = num.length;

  for (let i = len; i > 0; i -= 3) {
    num.splice(i, 0, ',');
  }

  num.splice(num.length - 1, 1);

  return num.join('');
}

function transfromNum (num) {
  if (typeof num !== 'number') return '';
  
  if (String(num).indexOf('.') > -1) {
    // 分为整数 小数部分
    const [intNum, leftNum] = String(num).split('.');
    return addComma(intNum) + `.${leftNum}`;
  }

  return addComma(num);
}

console.log(transfromNum(-1234569.77777))
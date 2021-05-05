// https://zhuanlan.zhihu.com/p/54275352

function isOk(row){ //判断设置的皇后是否在同一行，同一列，或者同一斜线上
  for (var j = 0; j < row; j++) {
    if (queen[row]==queen[j]||row-queen[row]==j-queen[j]||row+queen[row]==j+queen[j])
      return false;       
  }
  return true;
}

function back_tracking(row = 0) {    //算法函数，从第0行开始遍历
  if (row===n)
    t++;               //判断若遍历完成，就进行计数   
    //遍历棋盘每一列  
    for (var col=0;col<n;col++) {
        queen[row] = col;           //将皇后的位置记录在数组
        //判断皇后的位置是否有冲突
        if (isOk(row)) {
          back_tracking(row+1);   //递归，计算下一个皇后的位置
        }           
    }
}
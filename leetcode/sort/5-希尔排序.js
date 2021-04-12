function shellSort(arr) {
  var gap = Math.floor(arr.length / 2);

  while(gap >= 1) {
    for (var i = gap; i < arr.length; i++) {
      var j = i;
      var temp = arr[i]
      while(j > gap - i && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }
    
    gap = Math.floor(gap / 2);
  }

  return arr;
}

// 希尔排序(Shell's Sort)是插入排序的一种又称“缩小增量排序”。

// 他是 第一个 将 排序算法 复杂度降低 到 O (N^2)之下的 . 但是他的复杂度 至今未被证明 猜测 效率 为 O (N^1.3)

// 插入排序 就是 进行 gap(增量) 为 1 时候的操作

// 最佳情况：T(n) = O(nlog2 n)
// 最坏情况：T(n) = O(nlog2 n)
// 平均情况：T(n) =O(nlog n)
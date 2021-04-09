function selectionSort(arr) {
  for(var i = 0; i < arr.length - 1; i++) {
    var minIdx = i;

    for(var j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]){
        minIdx = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectionSort(arr))

// 选择排序(Selection-sort)是一种简单直观的排序算法。它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

// 算法分析
// 最佳情况：T(n) = O(n2)
// 最差情况：T(n) = O(n2)
// 平均情况：T(n) = O(n2)
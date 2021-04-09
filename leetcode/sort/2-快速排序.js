function quickSort(arr) {
  if (arr.length <= 1) return arr;

  var midIdx = Math.floor(arr.length / 2); // 选个中间的基准值
  var mid = arr.splice(midIdx, 1)[0];

  var left = [];
  var right = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([mid], quickSort(right));
}

// 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr))

// 最佳情况：T(n) = O(nlogn)
// 最差情况：T(n) = O(n2)
// 平均情况：T(n) = O(nlogn)
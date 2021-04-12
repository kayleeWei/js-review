function mergeSort(arr) {
  if (arr.length < 2)  return arr;

  var midIdx = Math.floor(arr.length / 2);

  var left = arr.slice(0, midIdx);
  var right = arr.slice(midIdx);

  return merge(left, right);
}

function merge(left, right) {
  var res = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while(left.length) {
    res.push(left.shift());
  }

  while(right.length) {
    res.push(right.shift());
  }

  return res;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));

// <1>.把长度为n的输入序列分成两个长度为n/2的子序列；
// <2>.对这两个子序列分别采用归并排序；
// <3>.将两个排序好的子序列合并成一个最终的排序序列。

// 最佳情况：T(n) = O(n)
// 最差情况：T(n) = O(nlogn)
// 平均情况：T(n) = O(nlogn)
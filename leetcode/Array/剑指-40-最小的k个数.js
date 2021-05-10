// https://github.com/sisterAn/JavaScript-Algorithms/issues/59     

// function getLeastNumbers(arr, k) {
//   arr.sort((a, b) => a - b);
//   return arr.slice(0, k)
// }

// 快排
function quickSort(arr) {
  if(arr.length < 1) return arr;

  var pivotIdx = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIdx, 1)[0];

  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

function findK(arr, k) {
  return quickSort(arr).slice(0, k);
}

console.log(getLeastNumbers([3, 2, 5, 8], 2))
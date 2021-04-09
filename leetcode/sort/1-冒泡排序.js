function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp; 
      }
    }
  }

  return arr;
}

var testArr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(testArr))

// 最佳情况：T(n) = O(n)
// 当输入的数据已经是正序时

// 最差情况：T(n) = O(n2)
// 当输入的数据是反序时

// 平均情况：T(n) = O(n2)
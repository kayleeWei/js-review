function countingSort(arr) {
  var count = []; // 计数
  var result = []; // 结果

  // 将每个数 当作索引 存进 数组(count)中，如果重复出现 则 索引对应的值 ++
  arr.forEach(function(item){
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
  });

  // 再按index顺序push到result中
  count.forEach(function(item, i) {
    if (item && item > 0) {
      for (var j = 0; j < item; j++) {
        result.push(i);
      }
    }
  });

  return result;
}

var testArr = [3, 3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(countingSort(testArr))

// 计数排序是一个分布式排序 , 它是用来排序整数的优秀算法（它是一个整数排序算法），时间复杂度为 O(n+k)，其中 k 是 临时计数数组的大小；但是，它确实需要更多的内存来存放临时数组。
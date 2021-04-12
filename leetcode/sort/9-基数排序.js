function radixSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  var max = Math.max(...arr);
  var digit = String(max).length;

  var count = [];

  for (var i = 0; i < digit; i++) {
    arr.forEach(function(item) {
      var str = String(item);
      var temp = +str[str.length - 1 - i];

      if (isNaN(temp)) {
        temp = 0;
      }

      if(Array.isArray(count[temp])) {
        count[temp].push(item)
      } else {
        count[temp] = [item];
      }
    })


    arr = [];

    count.forEach(function(item) {
      if(Array.isArray(item)) {
        item.forEach(function(a) {
          arr.push(a)
        })
      }
    });
    count = [];
  }
  return arr;
}

var testArr = [3, 3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(radixSort(testArr))

// 基数排序也是一个分布式排序算法，它是根据关键字排序的。

// 他先比较 每个数组的个位按计数排序处理, 再比较数组的十位. 计数排序处理 ..... 直到比较完最高位 就排好序了

// 最佳情况：T(n) = O(n * k)
// 最差情况：T(n) = O(n * k)
// 平均情况：T(n) = O(n * k)


// 十 ： 桶排序
// 桶排序（也被称为箱排序）也是分布式排序算法，它将元素分为不同的桶（较小的数组）， 再使用一个简单的排序算法，例如插入排序（用来排序小数组的不错的算法），来对每个桶进行 排序。然后，它将所有的桶合并为结果数组。

// 其实 上面的计数排序 基数排序 应该都属于 我们的桶排序,

// 但是桶排序 实际用的并不多 ， 我们掌握 计数 和基数 两个变体 就好了.

// 感兴趣的可以去单独了解桶 排序 , 看看 他为什么 用的不多 。
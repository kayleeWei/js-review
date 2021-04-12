function heapSort(arr) {
  // //1. 初始化大顶堆，从第一个非叶子结点开始
  for (var i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }


  //2.交换堆顶元素与末尾元素 + 调整堆结构
  for (var j = Math.floor(arr.length - 1); j > 0; j--) {
    swap(arr, 0, j); //将堆顶元素与末尾元素进行交换
    adjustHeap(arr, 0, j); // 调整堆结构
  }

  return arr;
}

function adjustHeap(arr, i, len) {
  var temp = arr[i];

  //从i结点的左子结点开始，也就是2i+1处开始
  for(var j = 2 * i + 1; j < len; j = 2 * j + 1) { //j=j*2+1，去到下一层的子节点
    temp = arr[i];
    //如果左子结点小于右子结点，j指向右子结点
    if (j + 1 < len && arr[j] < arr[j + 1]) {
      j++
    }

    if (temp < arr[j]) {
      swap(arr, i, j); // 如果父节点小于子节点:交换；否则跳出
      i = j; // 交换后，temp 的下标变为 j
    } else {
      break;
    }
  }

}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

var Arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log(heapSort(Arr));

// https://segmentfault.com/a/1190000015487916

// 堆是一个完全二叉树。
// 完全二叉树： 二叉树除开最后一层，其他层结点数都达到最大，最后一层的所有结点都集中在左边（左边结点排列满的情况下，右边才能缺失结点）。
// 大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
// 小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。


// 现在需要对如上二叉树做升序排序，总共分为三步：

// 1. 将初始二叉树转化为大顶堆（heapify）（实质是从第一个非叶子结点开始，从下至上，从右至左，对每一个非叶子结点做shiftDown操作），此时根结点为最大值，将其与最后一个结点交换。
// 2. 除开最后一个结点，将其余节点组成的新堆转化为大顶堆（实质上是对根节点做adjustHeap操作），此时根结点为次最大值，将其与最后一个结点交换。
// 3. 重复步骤2，直到堆中元素个数为1（或其对应数组的长度为1），排序完成。

// 最佳情况：T(n) = O(nlogn)
// 最差情况：T(n) = O(nlogn)
// 平均情况：T(n) = O(nlogn)
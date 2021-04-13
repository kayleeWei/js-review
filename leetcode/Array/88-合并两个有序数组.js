// https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
var merge = function(nums1, m, nums2, n) {
  var p1 = m - 1;
  var p2 = n - 1;
  var tail = m + n - 1;

  var cur;
  while(p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--]
    }

    nums1[tail--] = cur;
  }
};

//p1，p2指向原数组的尾部（不包括nums1空位置），tail指向最后一位
// 将较大的数放进nums1尾部

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))


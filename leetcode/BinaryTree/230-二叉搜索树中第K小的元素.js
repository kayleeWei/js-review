/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//  https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/er-cha-sou-suo-shu-zhong-di-kxiao-de-yuan-su-by-le/
// 构造 BST 的中序遍历序列，则第 k-1 个元素就是第 k 小的元素。
var kthSmallest = function(root, k) {
  const res = [];
  function inOrder(node, res) {
    if (!node) return [];

    if(node.left) inOrder(node.left, res);
    res.push(node.val);
    if(node.right) inOrder(node.right, res);
  }

  inOrder(root, res);

  return res[k -1];
};

// 迭代
var kthSmallest = function(root, k) {
  const res = [];
  const queue = [];
  let node = root;

  if (root) queue.push(root);

  while(node || queue.length > 0) {
    while(node) {
      queue.push(node);
      node = node.left;
    }

    node = queue.pop();
    res.push(node.val);
    node = node.right;
  }

  return res[k - 1];
}

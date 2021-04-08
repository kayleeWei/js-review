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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];

  function inOrder(node, res) {
    if (!node) return [];

    if (node.left) inOrder(node.left, res);
    res.push(node.val);
    if (node.right) inOrder(node.right, res);
  }

  inOrder(root, res);
  return res;
};

// 迭代
var inorderTraversal = function(root) {
  const res = [];
  const queue = [];
  let node = root;

  while(node ||  queue.length) {
    // 遍历左子树
    while(node) {
      queue.push(node);
      node = node.left
    }

    node = queue.pop();
    res.push(node.val);
    node = node.right;
  }

  return res;
}


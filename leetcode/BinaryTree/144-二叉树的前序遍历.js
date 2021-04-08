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

//  https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
var preorderTraversal = function(root) {
  const res = [];

  function preOrder(node, res) {
    if (!node) return [];

    res.push(node.val);
    if(node.left) preOrder(node.left, res);
    if(node.right) preOrder(node.right, res);
  }

  preOrder(root, res);

  return res;
};

// 迭代
var preorderTraversal2 = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while(queue.length !== 0) {
    const node = queue.pop();

    res.push(node.val);
    // 我们先打印左子树，然后右子树
    // 所以先加入栈的是右子树，然后左子树
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  return res;
}
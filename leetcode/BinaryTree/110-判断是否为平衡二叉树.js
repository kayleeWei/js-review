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
 * @return {boolean}
 */
//  https://leetcode-cn.com/problems/balanced-binary-tree/
//  一棵高度平衡二叉树定义为：
//  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

function balanced (node) {
  if (!node) return 0;

  const leftHeight = balanced(node.left);
  const rightHeight = balanced(node.right);
  if (leftHeight === -1 || rightHeight === - 1 || Math.abs(rightHeight - leftHeight) > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}
var isBalanced = function(root) {
  return balanced(root) !== -1;
};
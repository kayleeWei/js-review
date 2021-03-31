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
 * @return {number}
 */
// https://leetcode-cn.com/problems/diameter-of-binary-tree/
// 如何求两个叶子节点之间的路径 = 根节点左右儿子的深度之和
// 深度优先搜索

var diameterOfBinaryTree = function(root) {
  let maxDistance = 1;

  function depth(node) {
    if (!node) return 0;
  
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
  
    maxDistance = Math.max(maxDistance, leftDepth + rightDepth + 1);
  
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return maxDistance - 1; // 两结点之间的路径长度是以它们之间边的数目表示,所以节点数 - 1
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//  https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null; // 遇到null，返回null

  if (root === p || root === q) return root; // 遇到p或q，直接返回当前节点

  // 非null 非q 非p，则递归左右子树
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 根据递归的结果，决定谁是最近公共祖先
  if (left && right) {
    return root;
  }

  if (!left) {
    return right;
  }

  return left;
};
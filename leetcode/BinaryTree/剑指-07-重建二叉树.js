/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 前序遍历的第一个元素是根节点，找到中序遍历根节点index，分为左子树和右子树
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;

  const cur = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]); // 中序遍历根节点的index

  cur.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  cur.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return cur;
};
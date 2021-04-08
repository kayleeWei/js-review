// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if(!root) return null;

  const temp = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(temp);

  return root;
};
// 迭代
// var mirrorTree = function(root) {
//   if (!root) return null;
//   const queue = [root];
//   while(queue.length > 0) {
//     const node = queue.pop();
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);

//     const temp = node.left;
//     node.left = node.right;
//     node.right = temp;
//   }

//   return root;
// }
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
//  https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
// var postorderTraversal = function(root) {
//   const res = [];

//   function postOrder(node, res) {
//     if (!node) return [];

//     if (node.left) postOrder(node.left, res);
//     if (node.right) postOrder(node.right, res);

//     res.push(node.val);
//   }

//   postOrder(root, res);
//   return res;
// };

// 递归
var postorderTraversal = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while(queue.length !== 0) {
    const node = queue.pop();
    res.unshift(node.val); 

    // 先进栈queue左子树后右子树
    // 出栈的顺序就变更为先右后左
    // 右先头插法入list
    // 左再头插法入list
    // 实现右左根=>左右根
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res; // 左、右、根
}
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
//  https://leetcode-cn.com/problems/symmetric-tree/
// 递归
function check(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}

var isSymmetric = function(root) {
  return check(root, root);
};


// 迭代
// var isSymmetric = function(root) {
//   if (root === null) return true
//   if (root.left === null && root.right === null) return true

//   let queue = [ root.left, root.right ]

//   while (queue.length > 0) {
//     const node1 = queue.shift()
//     const node2 = queue.shift()


//     if (node1 === null && node2 === null) continue
//     if (node1 === null || node2 === null) return false
//     if (node1.val !== node2.val) return false

//     queue.push(node1.left)
//     queue.push(node2.right)
//     queue.push(node1.right)
//     queue.push(node2.left)

//   }

//   return true

// };
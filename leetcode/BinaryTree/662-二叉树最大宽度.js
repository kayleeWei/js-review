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
//  https://leetcode-cn.com/problems/maximum-width-of-binary-tree/
var widthOfBinaryTree = function(root) {
  if (!root) return 0;
  let res = []; // [1,2,...]存所有节点的编号
  let maxWidth = 1;
  getMaxWidth(root, 0, 1); // 根节点坐标为0，0
  return maxWidth;

  function getMaxWidth(node, depth, pos) {
    if (res[depth] !== undefined) {
      res[depth] = pos;
    }

    if (pos > Math.pow(10, 28))  pos = pos << 28; //大整数处理
    maxWidth = Math.max(pos - res[depth] + 1, maxWidth); // 当前层的最大宽度和之前最大宽度的比较

    if(node.left) {
      getMaxWidth(node.left, depth + 1, pos * 2);
    }

    if(node.right) {
      getMaxWidth(node.right, depth + 1, pos * 2 + 1);
    }
  }
};


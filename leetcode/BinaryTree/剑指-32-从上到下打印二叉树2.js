/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let level = 0; // 当前层数

  while(queue.length !== 0) {
    res[level] = [];

    // 遍历当前层
    const levelNum = queue.length;
    for (let i = 0; i < levelNum; i++) {
      const node = queue.shift();
      res[level].push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level++;
  }

  return res;
};
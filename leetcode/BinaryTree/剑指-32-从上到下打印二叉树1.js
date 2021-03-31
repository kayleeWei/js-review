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
//  https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
var levelOrder = function(root) {
  if (!root) return [];
  const res = []; // 打印结果
  const queue = [root]; // 包含根节点的队列

  // BFS循环
  while(queue.length !== 0) {
    const node = queue.shift(); // 队首出列
    res.push(node.val);

    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  return res;
};
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
 * @param {number} target
 * @return {number[][]}
 */
//  https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
function dfs(treeNode, sum, res, temp) {
  if (!treeNode) return;

  temp.push(treeNode.val); // 记录当前节点到路径
  if (!treeNode.left && !treeNode.right && treeNode.val === sum) { // 如果叶子节点的值等于剩下的值
    res.push([...temp]);
  } else {
    dfs(treeNode.left, sum - treeNode.val, res, temp); // 递归
    dfs(treeNode.right, sum - treeNode.val, res, temp); // 递归
  }

  temp.pop(); // 回到父节点时，删除子节点路径
}

var pathSum = function(root, target) {
  if(!root) return [];
  const res = [];
  dfs(root, target, res, []);

  return res;
};

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
const postorderTraversal = function(root) {
  const result = [];
  const dfs = function(node) {
    if (node === null) return;
    dfs(node.left);
    dfs(node.right);
    result.push(node.val);
  };

  dfs(root);
  return result;
};

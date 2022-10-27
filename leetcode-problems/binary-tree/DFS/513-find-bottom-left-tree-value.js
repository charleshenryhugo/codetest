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
const findBottomLeftValue = function(root) {
  const result = {
    depth: 0,
    value: root.val,
  };
  
  const dfs = function(node, depth) {
    if (node === null) return;
    
    if (depth > result.depth) {
      result.depth = depth;
      result.value = node.val;
    }
    
    if (node.left !== null) dfs(node.left, depth + 1);
    if (node.right !== null) dfs(node.right, depth + 1);
  }
  
  dfs(root, 0);
  return result.value;
};

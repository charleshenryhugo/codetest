// 257 https://leetcode.com/problems/binary-tree-paths/
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
 * @return {string[]}
 */
 const binaryTreePaths = function(root) {
  const paths = [];
  
  const dfs = function(node, path) {
    if (node === null) return;
    path.push(node.val);
    
    if (node.left === null && node.right === null) {
      paths.push(path.join('->'));
    }
    
    if (node.left !== null) dfs(node.left, path);
    if (node.right !== null) dfs(node.right, path);
    
    path.pop();
  }
  
  dfs(root, []);

  return paths;
};

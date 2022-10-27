/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
  const result = [];
  const dfs = function(node) {
    if (node === null) return;
    result.push(node.val);
    node.children.forEach(child => dfs(child));
  };
  
  dfs(root);
  return result;
};
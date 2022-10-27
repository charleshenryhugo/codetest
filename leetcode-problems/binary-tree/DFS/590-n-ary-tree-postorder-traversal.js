/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function(root) {
  const result = [];
  const dfs = function(node) {
    if (node === null) return;
    for (const child of node.children) {
      dfs(child);
    }
    result.push(node.val);
  };
  
  dfs(root);
  return result;
};
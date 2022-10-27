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
 const isSymmetric = function(root) {
  if (root === null) return true;
  
  // let result = true;
  
  const isMirror = function(node1, node2) {
    // if (result === false) return result;

    if (node1 === null && node2 === null) return true;
    
    if (node1 === null && node2 !== null) return false;
    
    if (node1 !== null && node2 === null) return false;
    
    return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    
    // return result;
  }
  
  return isMirror(root.left, root.right);
  
};
// 116 https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
  if (root === null) return root;
  
  let currentLevelCurrentNode = root;
  
  while (currentLevelCurrentNode !== null) {
    let nextLevelFirstNode = currentLevelCurrentNode.left;
    let prev = null;
    while (currentLevelCurrentNode !== null) {
      if (prev === null) {
        prev = currentLevelCurrentNode.left;
      } else {
        prev.next = currentLevelCurrentNode.left;
        prev = prev.next;
      }
      if (prev === null) {
        prev = currentLevelCurrentNode.right;
      } else {
        prev.next = currentLevelCurrentNode.right;
        prev = prev.next; 
      }
      
      currentLevelCurrentNode = currentLevelCurrentNode.next;
    }
    
    currentLevelCurrentNode = nextLevelFirstNode;
  }
  
  return root;
}; 
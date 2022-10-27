// 117 https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
  if (root === null) return root;

  let currentLevelCurrentNode = root;
  
  while(currentLevelCurrentNode !== null) {
    let prev = null;
    let nextLevelFirstNode = null;
    while (currentLevelCurrentNode !== null && currentLevelCurrentNode !== undefined) {
      if (currentLevelCurrentNode.left !== null) {
        nextLevelFirstNode ??= currentLevelCurrentNode.left;
        if (prev === null) {
          prev = currentLevelCurrentNode.left;
        } else {
          prev.next = currentLevelCurrentNode.left;
          prev = prev.next;
        }
      }
      if (currentLevelCurrentNode.right !== null) {
        nextLevelFirstNode ??= currentLevelCurrentNode.right;
        if (prev === null) {
          prev = currentLevelCurrentNode.right;
        } else {
          prev.next = currentLevelCurrentNode.right;
          prev = prev.next;
        }
      }
      currentLevelCurrentNode = currentLevelCurrentNode.next;
    }

    currentLevelCurrentNode = nextLevelFirstNode;
  }
  
  return root;
};

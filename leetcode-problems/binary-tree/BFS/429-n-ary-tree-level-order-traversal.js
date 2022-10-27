/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val,children) {
 this.val = val;
 this.children = children;
};
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const nodeQueue = [root];
  while(nodeQueue.length > 0) {
    const currentLevelSize = nodeQueue.length;
    const currentLevelValues = [];
    for (let i = 0; i < currentLevelSize; i++) {
      const { children, val } = nodeQueue.shift();
      currentLevelValues.push(val);

      children.forEach((child) => child !== null && nodeQueue.push(child));
    }
    result.push(currentLevelValues);
  }

  return result;
};

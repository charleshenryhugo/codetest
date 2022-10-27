/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 const largestValues = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  
  const queue = [root];
  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    let currentLevelMax = queue[0].val;
    for (let i = 0; i < currentLevelSize; i++) {
      const { left, right, val } = queue.shift();
      currentLevelMax = currentLevelMax > val ? currentLevelMax : val;
      left !== null && queue.push(left);
      right !== null && queue.push(right);
    }
    result.push(currentLevelMax);
  }
  
  return result;
};

/*
  3
 9 20
  15 7
*/

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const root = new TreeNode(3, node9, node20);

const result = largestValues(root);
console.log(result);

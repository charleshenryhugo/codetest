// 102. https://leetcode.com/problems/binary-tree-level-order-traversal/;
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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];

  while (queue.length > 0) {
    const currentLevelVals = [];
    const currentLevelSize = queue.length;

    for (let i = 0; i < currentLevelSize; i++) {
      const { val, left, right } = queue.shift();
      currentLevelVals.push(val);
      [left, right].forEach(child => child !== null && queue.push(child));
    }
    result.push(currentLevelVals);
  }

  return result;
};

/**
 * build a binary tree from array
 * @param {(number|null)[]} values 
 * @return {TreeNode | null}
 */
const createBinaryTree = function(values) {
  if (values.length === 0) {
    return null;
  }

  const treeNodes = Array(values.length).fill(null);
  for (let i = values.length - 1; i >= 0; i--) {
    const treeNode = values[i] === null ? null : new TreeNode(values[i]);

    if (2 * i + 1 < values.length && treeNodes[2 * i + 1] !== null) {
      treeNode.left = treeNodes[2 * i + 1];
    }
    if (2 * i + 2 < values.length && treeNodes[2 * i + 2] !== null) {
      treeNode.right = treeNodes[2 * i + 2];
    }
    treeNodes[i] = treeNode;
  }

  return treeNodes[0];
}

/*
  3
 9 20
  15 7
*/
const root = createBinaryTree([3, 9, 20, null, null, 15, 7]);

const result = levelOrder(root);
console.log(result);

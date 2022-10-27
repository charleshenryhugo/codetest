// 129 https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */
const sumNumbers = function(root) {
  let pathNumberSum = 0;

  /**
   * @param {TreeNode} treeNode 
   * @param {number} numberUntilNow 
   */
  const dfs = function(treeNode, numberUntilNow) {
    if (treeNode === null) {
      return;
    }
    const { left, right, val } = treeNode;

    if (left === null && right === null) {
      pathNumberSum += numberUntilNow * 10 + val;
      return;
    }

    dfs(left, numberUntilNow * 10 + val);
    dfs(right, numberUntilNow * 10 + val);
  }

  dfs(root, 0);

  return pathNumberSum;
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

const root = createBinaryTree([4,9,0,5,1]);
const result = sumNumbers(root);
console.log(result);

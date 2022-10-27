// 113 https://leetcode.com/problems/path-sum-ii/
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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
  const result = [];
  if (root === null) {
    return result;
  }
  const path = []; // currently viewing path

  /**
   * @param {TreeNode} node 
   * @param {number[]} path 
   * @param {number} remainingSum 
   */
  const dfs = function(node, remainingSum) {
    const { left, right, val } = node;
    path.push(val);
    
    if (left === null && right === null && val === remainingSum) {
      result.push([...path]);
    }
    
    if (left !== null) {
      dfs(left, remainingSum - val);
    }
    
    if (right !== null) {
      dfs(right, remainingSum - val);  
    }
    
    path.pop();
  }

  dfs(root, targetSum);

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

const root = createBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,null,5,1]);
const result = pathSum(root, 22);
console.log(result);

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
 const findFrequentTreeSum = function(root) {
  let maxFrequency = 1;
  const sums = {}; // { 2: 1, -3: 1, 4: 2}
  const result = { [maxFrequency]: [] }; // { 1: [2, -3], 2: [4] }
  
  const dfs = function(node) {
    if (node === null) {
      return 0;
    }
    
    const { left, right, val } = node;
    
    const sum = val + dfs(left) + dfs(right);

    const frequency = 1 + (sums[sum] ?? 0);

    sums[sum] = frequency;
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      result[frequency] = [sum];
    } else {
      result[frequency].push(sum);
    }

    return sum;
  }
  
  dfs(root);
  // console.log(sums);
  // console.log(maxFrequency);

  return result[maxFrequency];
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

const root = createBinaryTree([5, 2, -3]);
const result = findFrequentTreeSum(root);
console.log(result);

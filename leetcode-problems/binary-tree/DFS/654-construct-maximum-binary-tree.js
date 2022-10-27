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

const findMaxIndex = function(nums) {
  let maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  
  return maxIndex;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function(nums) {
  const constructFrom = function(i, j) {
    if (i > j) return null;
    if (i === j) return new TreeNode(nums[i]);
    
    const indexOfMaxValue = findMaxIndex(nums.slice(i, j + 1));
    const root = new TreeNode(nums[i + indexOfMaxValue]);
    
    root.left = constructFrom(i, i + indexOfMaxValue - 1);
    root.right = constructFrom(i + indexOfMaxValue + 1, j);
    
    return root;
  }
  
  return constructFrom(0, nums.length - 1);
};

const root = constructMaximumBinaryTree([3,2,1,6,0,5]);
console.log(root);

// 108 https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 const sortedArrayToBST = function(nums) {
  const buildFrom = function(i, j) {
    if (i === j) return new TreeNode(nums[i]);
    if (i > j) return null;
    
    const pivotIndex = Math.floor((j - i) / 2);
    
    return new TreeNode(
      nums[i + pivotIndex],
      buildFrom(i, i + pivotIndex - 1),
      buildFrom(i + pivotIndex + 1, j),
    );
  }
  
  return buildFrom(0, nums.length - 1);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  this.val = (val===undefined ? 0 : val)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {

  /**
   * @param {number} j inorder subarray right edge
   * @param {number} i inorder subarray left edge
   * @param {number} p preorder subarray left edge
   * @param {number} q preorder subarray right edge
   * @returns {TreeNode}
   */
  const buildFrom = function(i, j, p, q) {
    if (p > q) return null;
    const root = new TreeNode(preorder[p]);

    if (p === q) return root;

    const pos = inorder.slice(i, j + 1).indexOf(root.val);
    root.left = buildFrom(i, i + pos - 1, p + 1, p + pos);
    root.right = buildFrom(i + pos + 1, j, p + pos + 1, q);

    return root;
  };

  return buildFrom(0, inorder.length - 1, 0, preorder.length - 1);
};

console.log(buildTree(
  [3,9,20,15,7],
  [9,3,15,20,7]
))
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  // in       4 2 5 1 6 3 7
  //          i     .     j
  // post     4 5 2 6 7 3 1
  //          p           q

  const buildFrom = function(i, j, p, q) {
    if (p > q) return null;

    console.log(inorder.slice(i, j + 1), postorder.slice(p, q + 1));
    // console.log(postorder[q]);

    const root = new TreeNode(postorder[q]);
    if (p === q) return root; // just make a leaf and return

    const rootValPosition = inorder.slice(i, j + 1).indexOf(root.val); // 3
    // be careful of the index, which should be the index of the global array
    root.left = buildFrom(i, i + rootValPosition - 1, p, p + rootValPosition - 1);
    root.right = buildFrom(i + rootValPosition + 1, j, p + rootValPosition, q - 1);

    return root;
  }

  return buildFrom(0, inorder.length - 1, 0, postorder.length - 1);
};

/*
    3
  9  20
    15 7
*/

// const root = buildTree(
//   [9,3,15,20,7],
//   [9,15,7,20,3],
// );

// console.log(root);

const root2 = buildTree(
  [1,2,3,4],
  [4,3,2,1],
);

console.log(root2)

// buildTree(
//   [8,4,9,2,5,1,11,10,12,6,3,7],
//   [8,9,4,5,2,11,12,10,6,7,3,1],
// )


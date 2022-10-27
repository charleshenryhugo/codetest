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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// need to do in O(N) space
const recoverTree = function(root) {
  let firstWrongNode = null;
  let secondWrongNode = null;
  let previousCheckedNode = null;

  const inorder = function(node) {
    if (node === null) return;

    inorder(node.left);

    if (previousCheckedNode !== null && previousCheckedNode.val > node.val) {
      if (firstWrongNode === null) {
        firstWrongNode = previousCheckedNode;
      }
      secondWrongNode = node;
    }
    previousCheckedNode = node;

    inorder(node.right);
  };

  inorder(root);

  if (firstWrongNode !== null && secondWrongNode !== null) {
    const temp = firstWrongNode.val;
    firstWrongNode.val = secondWrongNode.val;
    secondWrongNode.val = temp;
  }
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

const root = createBinaryTree([2,3,1]);
recoverTree(root);

console.log(root);

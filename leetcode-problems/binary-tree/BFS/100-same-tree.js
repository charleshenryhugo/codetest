// 100 https://leetcode.com/problems/same-tree/submissions/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree_recursive = function(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }

  const nodeQueueP = [p];
  const nodeQueueQ = [q];
  while (nodeQueueP.length > 0 && nodeQueueQ.length > 0) {
    const { left: leftP, right: rightP, val: valP } = nodeQueueP.shift();
    const { left: leftQ, right: rightQ, val: valQ } = nodeQueueQ.shift();
    
    if (valP !== valQ) {
      return false;
    }

    if (leftP?.val !== leftQ?.val || rightP?.val !== rightQ?.val) {
      return false;
    }

    if (leftP !== null) {
      nodeQueueP.push(leftP);
      nodeQueueQ.push(leftQ)
    }
    if (rightP !== null) {
      nodeQueueP.push(rightP);
      nodeQueueQ.push(rightQ);
    }
  }

  if (nodeQueueP.length === 0 && nodeQueueQ.length === 0) {
    return true;
  }
  return false;
}

/**
   1
  2  2
 3  3
*/
/**
   1
  2  2
 3  3
 */
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(3);

root.left = node1;
root.right = node2;
node1.left = node3;
node2.left = node4;

const p = root;
const q = root;

console.log(isSameTree(p, q));

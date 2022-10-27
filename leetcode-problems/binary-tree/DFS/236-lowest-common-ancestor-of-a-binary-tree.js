// 236 https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor_recursive = function(root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;
  
  const ancestorFromLeft = lowestCommonAncestor(root.left, p, q);
  const ancestorFromRight = lowestCommonAncestor(root.right, p, q);
  
  if (ancestorFromLeft !== null && ancestorFromRight !== null) return root;
  
  if (ancestorFromLeft === null) return ancestorFromRight;
  
  if (ancestorFromRight === null) return ancestorFromLeft;
  
  return null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  const Status = {
    BP: 0, // Both Pending
    LD: 1, // Left Done
    BD: 2, // Right Done
  }

  const nodeStack = [{ node: root, status: Status.BP }];
  let ancestor = null;

  while (nodeStack.length > 0) {
    const { node, status } = nodeStack.pop();
    if (node === null) {
      continue;
    }

    const { left, right, val } = node;

    if (status === Status.BP) {
      if (val === p.val || val === q.val) {
        if (ancestor !== null) {
          return ancestor;
        }
        ancestor = node;
      }
      nodeStack.push({ node: node, status: Status.LD });
      nodeStack.push({ node: left, status: Status.BP });
    }
    if (status === Status.LD) {
      nodeStack.push({ node: node, status: Status.BD });
      nodeStack.push({ node: right, status: Status.BP});
    }
    if (status === Status.BD) {
      if (ancestor?.val === node.val && nodeStack.at(-1) !== undefined) {
        ancestor = nodeStack[nodeStack.length - 1].node;
      }
    }
  }

  return ancestor;
}

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
};

const root = createBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);

const mockP = new TreeNode(6);
const mockQ = new TreeNode(4);
console.log(lowestCommonAncestor(root, mockP, mockQ));

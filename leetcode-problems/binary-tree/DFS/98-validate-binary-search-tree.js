// 98 https://leetcode.com/problems/validate-binary-search-tree
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
 * @return {boolean}
 */
const isValidBST_recursive = function(root) {
  const { result } = isBST(root);
  return result;
}

/**
 * @param {TreeNode} root
 */
const isBST = function(root) {
  const { left, right, val } = root;

  if (left === null && right === null) {
    return {
      result: true,
      min: val,
      max: val,
    };
  }

  if (left === null) {
    const { result: isRightBST, min: minOfRight, max: maxOfRight } = isBST(right);
    return {
      result: isRightBST && val < minOfRight,
      min: val,
      max: maxOfRight,
    };
  }

  if (right === null) {
    const { result: isLeftBST, min: minOfLeft, max: maxOfLeft } = isBST(left);
    return {
      result: isLeftBST && val > maxOfLeft,
      min: minOfLeft,
      max: val,
    };
  }

  const { result: isLeftBST, min: minOfLeft, max: maxOfLeft } = isBST(left);
  const { result: isRightBST, min: minOfRight, max: maxOfRight } = isBST(right);

  return {
    result: isLeftBST && isRightBST && val > maxOfLeft && val < minOfRight,
    min: minOfLeft,
    max: maxOfRight,
  };
};

/**
 * in order traversal is the smartest way:
 * left -> node -> right
 * @param TreeNode root
 * @return {boolean}
 */
const isValidBST = function(root) {
  const Status = {
    BP: 0,
    RD: 1,
  }

  let current = Number.MIN_SAFE_INTEGER;
  const nodeStack = [{ node: root, status: Status.BP }];

  while (nodeStack.length > 0) {
    const { node, status } = nodeStack.pop();
    if (node === null) {
      continue;
    }

    const { left, right, val } = node;
    if (status === Status.BP) {
      nodeStack.push({ node: right, status: Status.BP });
      nodeStack.push({ node: node, status: Status.RD });
      nodeStack.push({ node: left, status: Status.BP });
    }

    if (status === Status.RD) {
      if (current >= val) {
        return false;
      }
      current = val;
    }
  }

  return true;
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

const root = createBinaryTree([120,70,140,50,100,130,160,20,55,75,110,119,135,150,200]);
console.log(isValidBST(root));
// isBST(root);

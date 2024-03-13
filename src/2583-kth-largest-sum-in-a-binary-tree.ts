import { getArrayFromTree } from './utils/tree';

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (!root) return -1;
  const sumArr: number[] = [];
  const search = (node: TreeNode, level: number) => {
    if (typeof sumArr[level] !== 'number') sumArr[level] = 0;
    sumArr[level] += node.val;
    if (node.left) {
      search(node.left, level + 1);
    }
    if (node.right) {
      search(node.right, level + 1);
    }
  };
  search(root, 0);
  sumArr.sort((a, b) => a - b);
  return sumArr[sumArr.length - k] ?? -1;
}

export default kthLargestLevelSum;

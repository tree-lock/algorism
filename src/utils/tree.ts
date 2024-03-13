/** Definition for a binary tree node. */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function constructTreeFromArray(arr: (number | null)[]) {
  const search = (i: number): TreeNode | null => {
    const value = arr[i];
    if (typeof value === 'number') {
      const root = new TreeNode(value);
      root.left = search(i * 2 + 1);
      root.right = search(i * 2 + 2);
      return root;
    }
    return null;
  };
  const root = search(0);
  return root;
}

export function getArrayFromTree(root: TreeNode | null) {
  if (!root) return [];
  const arr: (number | null)[] = [];
  const search = (root: TreeNode | null, i: number) => {
    if (!root) {
      return;
    }
    arr[i] = root.val;
    search(root.left, i * 2 + 1);
    search(root.right, i * 2 + 2);
  };
  search(root, 0);
  arr.forEach((_, index) => {
    if (arr[index] === undefined) {
      arr[index] = null;
    }
  });
  return arr;
}

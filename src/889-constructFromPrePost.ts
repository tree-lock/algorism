// Definition for a binary tree node.
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

export function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  const dfs = (
    preStart: number,
    preEnd: number,
    postStart: number,
    postEnd: number
  ): TreeNode | null => {
    if (preEnd < preStart) {
      return null;
    }
    const rootNum = preorder[preStart];
    const root = new TreeNode(rootNum);
    if (preStart === preEnd) {
      return root;
    }
    const leftNum = preorder[preStart + 1];
    const rightNum = postorder[postEnd - 1];

    const leftPostEnd = postorder.findIndex((item) => item === leftNum);
    const leftPostStart = postStart;
    const rightPostStart = leftPostEnd + 1;
    const rightPostEnd = postEnd - 1;

    const leftPreStart = preStart + 1;
    const rightPreStart = preorder.findIndex((item) => item === rightNum);
    const leftPreEnd = rightPreStart - 1;
    const rightPreEnd = preEnd;

    root.left = dfs(leftPreStart, leftPreEnd, leftPostStart, leftPostEnd);
    root.right = dfs(rightPreStart, rightPreEnd, rightPostStart, rightPostEnd);
    return root;
  };
  return dfs(0, preorder.length - 1, 0, preorder.length - 1);
}

// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

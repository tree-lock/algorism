import { expect, test, describe } from 'bun:test';
import kthLargestLevelSum from '../src/2583-kth-largest-sum-in-a-binary-tree';
import { constructTreeFromArray } from '../src/utils/tree';

describe(kthLargestLevelSum.name, () => {
  test([5, 8, 9, 2, 1, 3, 7, 4, 6].toString(), () => {
    const treeNode = constructTreeFromArray([5, 8, 9, 2, 1, 3, 7, 4, 6]);
    const k = 2;
    const expected = 13;
    const output = kthLargestLevelSum(treeNode, k);
    expect(expected).toBe(output);
  });

  test([1, 2, null, 3].toString(), () => {
    const treeNode = constructTreeFromArray([1, 2, null, 3]);
    const k = 1;
    const expected = 3;
    const output = kthLargestLevelSum(treeNode, k);
    expect(expected).toBe(output);
  });

  test([5, 8, 9, 2, 1, 3, 7].toString(), () => {
    const treeNode = constructTreeFromArray([5, 8, 9, 2, 1, 3, 7]);
    const k = 4;
    const expected = -1;
    const output = kthLargestLevelSum(treeNode, k);
    expect(expected).toBe(output);
  });
});

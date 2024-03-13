import { expect, test, describe } from 'bun:test';
import { constructTreeFromArray, getArrayFromTree } from '../../src/utils/tree';

describe(constructTreeFromArray.name, () => {
  test([1, 2, 3, 4, 5, 6, 7].toString(), () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const output = constructTreeFromArray(input);
    expect(output?.val).toBe(1);
    expect(output?.left?.val).toBe(2);
    expect(output?.right?.val).toBe(3);
    expect(output?.left?.left?.val).toBe(4);
    expect(output?.left?.right?.val).toBe(5);
    expect(output?.right?.left?.val).toBe(6);
    expect(output?.right?.right?.val).toBe(7);
  });

  test([1].toString(), () => {
    const input = [1];
    const output = constructTreeFromArray(input);
    expect(output?.val).toBe(1);
    expect(output?.left).toBeNull();
    expect(output?.right).toBeNull();
  });
});

describe(getArrayFromTree.name, () => {
  test([1, 2, 3, 4, 5, 6, 7].toString(), () => {
    const expected = [1, 2, 3, 4, 5, 6, 7];
    const input = constructTreeFromArray(expected);
    const output = getArrayFromTree(input);
    expect(output).toStrictEqual(expected);
  });

  test([1].toString(), () => {
    const expected = [1];
    const input = constructTreeFromArray(expected);
    const output = getArrayFromTree(input);
    expect(output).toStrictEqual(expected);
  });

  test([1, null, 2].toString(), () => {
    const expected = [1];
    const input = constructTreeFromArray(expected);
    const output = getArrayFromTree(input);
    expect(output).toStrictEqual(expected);
  });
});

import { expect, test, describe } from 'bun:test';
import {
  minIncrements,
  minIncrements1,
} from '../src/2673-make-costs-of-paths-equal-in-a-binary-tree';

describe(minIncrements.name, () => {
  test([1, 5, 2, 2, 3, 3, 1].toString(), () => {
    const n = 7;
    const cost = [1, 5, 2, 2, 3, 3, 1];
    const result = minIncrements(n, cost);
    expect(result).toBe(6);
  });

  test([5, 3, 3].toString(), () => {
    const n = 3;
    const cost = [5, 3, 3];
    const result = minIncrements(n, cost);
    expect(result).toBe(0);
  });

  test(
    [
      764, 1460, 2664, 764, 2725, 4556, 5305, 8829, 5064, 5929, 7660, 6321,
      4830, 7055, 3761,
    ].toString(),
    () => {
      const n = 15;
      const cost = [
        764, 1460, 2664, 764, 2725, 4556, 5305, 8829, 5064, 5929, 7660, 6321,
        4830, 7055, 3761,
      ];
      const result = minIncrements(n, cost);
      expect(result).toBe(15735);
    }
  );
});

describe(minIncrements1.name, () => {
  test([1, 5, 2, 2, 3, 3, 1].toString(), () => {
    const n = 7;
    const cost = [1, 5, 2, 2, 3, 3, 1];
    const result = minIncrements1(n, cost);
    expect(result).toBe(6);
  });

  test([5, 3, 3].toString(), () => {
    const n = 3;
    const cost = [5, 3, 3];
    const result = minIncrements1(n, cost);
    expect(result).toBe(0);
  });

  test(
    [
      764, 1460, 2664, 764, 2725, 4556, 5305, 8829, 5064, 5929, 7660, 6321,
      4830, 7055, 3761,
    ].toString(),
    () => {
      const n = 15;
      const cost = [
        764, 1460, 2664, 764, 2725, 4556, 5305, 8829, 5064, 5929, 7660, 6321,
        4830, 7055, 3761,
      ];
      const result = minIncrements1(n, cost);
      expect(result).toBe(15735);
    }
  );
});

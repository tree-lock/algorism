import { expect, test, describe } from 'bun:test';
import { Heapq } from '../../src/utils/heapq';

const check = (arr: number[]) => {
  const h = new Heapq(arr);
  expect(h.heapSort()).toMatchObject(arr.toSorted((a, b) => a - b));
};

describe(Heapq.name, () => {
  test('A', () => {
    check([4, 6, 8, 5, 9]);
  });

  test('B', () => {
    check([22, 75, 8, 41, 63, 17, 94, 35, 51, 29]);
    check([61, 14, 87, 46, 33, 79, 4, 25, 92, 68]);
    check([11, 54, 39, 82, 28, 67, 93, 5, 76, 20]);
    check([37, 89, 2, 58, 71, 16, 45, 83, 9, 62]);
    check([49, 31, 95, 6, 74, 18, 56, 43, 27, 85]);
    check([65, 12, 48, 91, 3, 72, 38, 53, 26, 80]);
    check([60, 23, 77, 36, 90, 1, 44, 69, 15, 32]);
    check([59, 47, 84, 21, 70, 96, 10, 57, 40, 13]);
    check([73, 34, 88, 19, 64, 7, 55, 30, 81, 42]);
    check([66, 99, 24, 78, 50, 97, 52, 86, 98, 0]);
  });
});

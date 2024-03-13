import { expect, test, describe } from 'bun:test';
import { dijkastra } from '../../src/utils/dijkstra';

describe(dijkastra.name, () => {
  test('A', () => {
    const n = 7;
    const roads = [
      [0, 6, 7],
      [0, 1, 2],
      [1, 2, 3],
      [1, 3, 3],
      [6, 3, 3],
      [3, 5, 1],
      [6, 5, 1],
      [2, 5, 1],
      [0, 4, 5],
      [4, 6, 2],
    ];
    const ans = dijkastra(n, roads);
    expect(ans.distance).toBe(7);
  });
});

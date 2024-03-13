export function minIncrements(n: number, cost: number[]): number {
  let ans = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      cost[i] += cost[(i - 2) / 2];
    } else {
      cost[i] += cost[(i - 1) / 2];
    }
  }

  // 1. find max value;
  let max: number = 1;
  for (let i = 0; i < n / 2; i++) {
    max = Math.max(cost[n - i - 1], max);
  }

  for (let i = 0; i < n / 2; i++) {
    ans[n - i - 1] = max - cost[n - i - 1];
  }

  for (let i = 0; i < n / 2 - 1; i++) {
    const index = n - i - 1 - (n + 1) / 2;
    const min = Math.min(ans[2 * index + 1], ans[2 * index + 2]);
    ans[index] = min;
    ans[2 * index + 1] -= min;
    ans[2 * index + 2] -= min;
  }

  return ans.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

// parent can always represent children, (if never use root node, should have a try)
export function minIncrements1(n: number, cost: number[]): number {
  let ans = 0;
  for (let i = n - 2; i > 0; i -= 2) {
    ans += Math.abs(cost[i] - cost[i + 1]);
    // 叶节点 i 和 i+1 的双亲节点下标为 i/2（整数除法）
    cost[i >> 1] += Math.max(cost[i], cost[i + 1]);
  }
  return ans;
}

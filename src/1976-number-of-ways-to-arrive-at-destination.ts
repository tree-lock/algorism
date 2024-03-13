export function countPaths(n: number, roads: number[][]): number {
  const t = new Array(n).fill(undefined).map((_, index) => {
    return {
      node: index,
      distance: Number.MAX_SAFE_INTEGER,
      preNode: [] as number[],
      signed: false,
    };
  });
  t[0].distance = 0;
  const targetNodeT = t[n - 1];
  let currentNode = 0;
  while (targetNodeT.signed === false) {
    const possibleRoads = roads.filter(
      (road) =>
        (road[0] === currentNode || road[1] === currentNode) &&
        t[road[1]].signed === false &&
        t[road[0]].signed === false
    );
    const currentNodeT = t[currentNode];
    const currentDistance = currentNodeT.distance;

    possibleRoads.forEach((road) => {
      const distance = road[2];

      const targetNode = road[0] === currentNode ? road[1] : road[0];
      const targetNodeT = t[targetNode];
      const targetNodeDistance = targetNodeT.distance;
      const newTargetNodeDistance = currentDistance + distance;
      if (targetNodeDistance > newTargetNodeDistance) {
        targetNodeT.preNode = [currentNode];
        targetNodeT.distance = newTargetNodeDistance;
      } else if (targetNodeDistance === newTargetNodeDistance) {
        targetNodeT.preNode.push(currentNode);
      }
    });

    currentNodeT.signed = true;

    let minDistance = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < t.length; i++) {
      const nodeT = t[i];
      if (nodeT.signed === true) continue;
      if (minDistance > nodeT.distance) {
        minDistance = nodeT.distance;
        currentNode = nodeT.node;
      }
    }
  }

  const nodeToSearch = targetNodeT.preNode;
  let ans = 0;
  while (nodeToSearch.some((item) => item !== 0)) {
    for (let i = n - 1; i > 0; i--) {
      const tToReplace = t[i];
      const [n, ...rest] = tToReplace.preNode;
      const searchLength = nodeToSearch.length;
      for (let j = 0; j < searchLength; j++) {
        if (nodeToSearch[j] === i) {
          nodeToSearch[j] = n;
          nodeToSearch.push(...rest);
        }
      }
    }
  }

  return nodeToSearch.length;
}

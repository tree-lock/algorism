export function dijkastra(
  n: number,
  roads: number[][],
  target: number = n - 1
): {
  distance: number;
  road: number[];
} {
  const t = new Array(n).fill(undefined).map((_, index) => {
    return {
      node: index,
      distance: Number.MAX_SAFE_INTEGER,
      preNode: -1,
      signed: false,
    };
  });
  t[0].distance = 0;
  t[0].signed = true;

  let currentNode = 0;
  while (t.some((item) => item.signed === false)) {
    const possibleRoads = roads.filter(
      (item) => item[0] === currentNode && t[item[1]].signed === false
    );
    const preDistance = t[currentNode].distance;
    possibleRoads.forEach((item) => {
      const targetNode = item[1];
      const distance = item[2];
      const newTargetDistance = distance + preDistance;
      const currentTargetDistance = t[targetNode].distance;
      if (newTargetDistance < currentTargetDistance) {
        t[targetNode].distance = newTargetDistance;
        t[targetNode].preNode = currentNode;
      }
    });
    t[currentNode].signed = true;

    let minDistance = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < t.length; i++) {
      if (t[i].signed === true) continue;
      if (minDistance > t[i].distance) {
        minDistance = t[i].preNode;
        currentNode = i;
      }
    }
  }

  const distance = t[target].distance;
  if (distance === Number.MAX_SAFE_INTEGER)
    return {
      distance: -1,
      road: [],
    };
  const road: number[] = [target];
  while (true) {
    const currentNode = road.at(-1) as number;
    const preNode = t[currentNode].preNode;
    if (preNode === -1) {
      break;
    }
    road.push(preNode);
  }
  return {
    distance,
    road,
  };
}

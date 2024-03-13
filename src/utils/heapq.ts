/** max heap */
export class Heapq {
  value: number[];

  constructor(value: number[] = []) {
    this.value = value;
    this.value = this.heapify(value);
  }

  /**
   * adjust array value to max heap
   * @param start index start adjust
   * @param end index end adjust
   */
  heapAdjust(value = this.value, index = 0, end = value.length - 1) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    while (left <= end) {
      let newIndex = index;
      if (value[left] > value[index]) {
        newIndex = left;
      }
      if (right <= end && value[right] > value[newIndex]) {
        newIndex = right;
      }
      if (newIndex === index) break;
      this.swap(newIndex, index);
      index = newIndex;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }

  /** convert a arr to max heap */
  heapify(value: number[] = this.value): number[] {
    for (let i = (value.length >> 1) - 1; i >= 0; i--) {
      this.heapAdjust(value, i);
    }
    return value;
  }

  /** push element into heap */
  heappush(element: number, value: number[] = this.value) {
    value.push(element);
    let index = value.length - 1;
    while (index > 0) {
      const rootIndex = this.shiftUp(index);
      if (rootIndex === index) {
        break;
      }
      index = rootIndex;
    }
  }
  heappop(value: number[] = this.value): number | undefined {
    this.swap(0, value.length - 1);
    const res = value.pop();
    this.heapAdjust();
    return res;
  }
  heapSort() {
    let length = 0;
    const value = this.value;
    while (length < value.length) {
      this.swap(0, value.length - length - 1);
      length++;
      this.heapAdjust(value, 0, value.length - length - 1);
    }
    return this.value;
  }

  getRootIndex(index: number): number {
    if (index <= 0) return -1;
    return (index - 1) >> 1;
  }

  swap(i: number, j: number, value = this.value) {
    [value[i], value[j]] = [value[j], value[i]];
  }

  /** swap element if value[rootIndex] < value[index] */
  shiftUp(index: number, value: number[] = this.value): number {
    const rootIndex = this.getRootIndex(index);
    if (rootIndex < 0) {
      return index;
    }
    if (value[index] > value[rootIndex]) {
      this.swap(index, rootIndex);
      return rootIndex;
    }
    return index;
  }

  /** swap element if value[childrenIndex] > value[index] */
  shiftDown(index: number, value: number[] = this.value): number {
    const leftIndex = index * 2 + 1;
    const rightIndex = leftIndex + 1;
    if (leftIndex > value.length - 1) {
      return index;
    }
    let maxIndex = index;
    if (value[index] < value[leftIndex]) {
      maxIndex = leftIndex;
    } else if (
      value[rightIndex] !== undefined &&
      value[maxIndex] < value[rightIndex]
    ) {
      maxIndex = rightIndex;
    }
    if (maxIndex === index) return maxIndex;
    this.swap(index, maxIndex);
    return maxIndex;
  }
}

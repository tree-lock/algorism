class Stack {
  innerStack = new Array();
  constructor() {}
  push(x: number): void {
    this.innerStack.push(x);
  }
  pop(): number {
    return this.innerStack.pop();
  }
  peek(): number {
    return this.innerStack.at(-1);
  }
  size(): number {
    return this.innerStack.length;
  }
  isEmpty(): boolean {
    return this.innerStack.length === 0;
  }
}

class MyQueue {
  stack1 = new Stack();
  stack2 = new Stack();
  constructor() {}

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek(): number {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.peek();
  }

  empty(): boolean {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

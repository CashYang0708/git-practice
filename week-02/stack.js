// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  #items; // #帶表示private的意思，在物件導向中private只能在這個類別裡面被access，不能直接被子類別或在這個類別外被修改

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    // TODO
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    // TODO
    if (!this.isEmpty()) {
      this.#items.pop();
    } else {
      console.log("The stack is empty!");
    }
    console.log(this.peek());
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    // TODO
    if (this.isEmpty()) {
      console.log("The stack is empty!");
      return null;
    }
    return this.#items[this.size() - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    // TODO
    return this.size() == 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    // TODO
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    // TODO
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    // TODO
    console.log(this.#items);
  }
}

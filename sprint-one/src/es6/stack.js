class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var end = this.size();

    for (var i = end; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }

    this.storage[0] = value;
  }

  pop() {
    var result = this.storage[0];
    var end = this.size();

    for (var i = 1; i < end; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[end - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
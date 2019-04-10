class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    for (var key in this.storage) {
      var nextIndex = Number(key) + 1;
      this.storage[nextIndex] = this.storage[key];
    }
    this.storage[0] = value;
  }

  pop() {
    var result = this.storage[0];
    for (var key in this.storage) {
      if (key === '0') {
        continue;
      } else {
        var prevIndex = Number(key) - 1;
        this.storage[prevIndex] = this.storage[key];
      }
    }
    var last = Object.keys(this.storage).length;
    delete this.storage[last - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
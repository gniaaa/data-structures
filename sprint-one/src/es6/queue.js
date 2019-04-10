class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var last = Object.keys(this.storage).length;
    this.storage[last] = value;
  }

  dequeue() {
    var result = this.storage[0];
    for (var key in this.storage) {
      var newIndex = Number(key) + 1;
      this.storage[key] = this.storage[newIndex];
    }
    var last = Object.keys(this.storage).length;
    delete this.storage[last - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

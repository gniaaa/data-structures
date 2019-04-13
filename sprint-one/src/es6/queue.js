class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var end = this.size();
    this.storage[end] = value;
  }

  dequeue() {
    var result = this.storage[0];
    var end = this.size();

    for (var i = 0; i < end; i++) {
      this.storage[i] = this.storage[i + 1];
    }

    delete this.storage[end - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

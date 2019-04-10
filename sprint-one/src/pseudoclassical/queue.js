var Queue = function () {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  var last = Object.keys(this.storage).length;
  this.storage[last] = value;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[0];
  for (var key in this.storage) {
    newIndex = Number(key) + 1;
    this.storage[key] = this.storage[newIndex];
  }
  var last = Object.keys(this.storage).length;
  delete this.storage[last - 1];
  return result;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

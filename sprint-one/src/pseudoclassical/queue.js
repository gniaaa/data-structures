var Queue = function () {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  var end = this.size();
  this.storage[end] = value;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[0];
  var end = this.size();

  for (var i = 0; i < end; i++) {
    this.storage[i] = this.storage[i + 1];
  }

  delete this.storage[end - 1];
  return result;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

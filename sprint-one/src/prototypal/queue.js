var Queue = function () {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  var last = Object.keys(this.storage).length;
  this.storage[last] = value;
};

queueMethods.dequeue = function () {
  var result = this.storage[0];
  for (var key in this.storage) {
    newIndex = Number(key) + 1;
    this.storage[key] = this.storage[newIndex];
  }
  var last = Object.keys(this.storage).length;
  delete this.storage[last - 1];
  return result;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};


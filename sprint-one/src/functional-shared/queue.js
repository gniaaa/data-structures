var Queue = function () {
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    var last = Object.keys(this.storage).length;
    this.storage[last] = value;
  },

  dequeue: function () {
    var result = this.storage[0];
    for (var key in this.storage) {
      newIndex = Number(key) + 1;
      this.storage[key] = this.storage[newIndex];
    }
    var last = Object.keys(this.storage).length;
    delete this.storage[last - 1];
    return result;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }

};



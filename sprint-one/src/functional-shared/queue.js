var Queue = function () {
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    var end = this.size();
    this.storage[end] = value;
  },

  dequeue: function () {
    var result = this.storage[0];
    var end = this.size();

    for (var i = 0; i < end; i++) {
      this.storage[i] = this.storage[i + 1];
    }

    delete this.storage[end - 1];
    return result;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }

};



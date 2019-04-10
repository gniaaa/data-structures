var queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    var last = Object.keys(storage).length;
    storage[last] = value;
  };

  someInstance.dequeue = function () {
    var result = storage[0];
    for (var key in storage) {
      newIndex = Number(key) + 1;
      storage[key] = storage[newIndex];
    }
    var last = Object.keys(storage).length;
    delete storage[last - 1];
    return result;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};

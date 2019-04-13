var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    var end = someInstance.size();
    storage[end] = value;
  };

  someInstance.dequeue = function () {
    var result = storage[0];
    var end = someInstance.size();

    for (var i = 0; i < end; i++) {
      storage[i] = storage[i + 1];
    }

    delete storage[end - 1];
    return result;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    var end = someInstance.size();
    for (var i = end; i > 0; i--) {
      storage[i] = storage[i - 1];
    }

    storage[0] = value;
  };

  someInstance.pop = function () {
    var result = storage[0];
    var end = someInstance.size();

    for (var i = 1; i < end; i++) {
      storage[i - 1] = storage[i];
    }

    delete storage[end - 1];
    return result;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};

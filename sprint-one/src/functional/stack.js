var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    for (var key in storage) {
      var nextIndex = Number(key) + 1;
      storage[nextIndex] = storage[key];
    }
    storage[0] = value;
  };

  someInstance.pop = function () {
    var result = storage[0];
    for (var key in storage) {
      if (key === '0') {
        continue;
      } else {
        var prevIndex = Number(key) - 1;
        storage[prevIndex] = storage[key];
      }
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

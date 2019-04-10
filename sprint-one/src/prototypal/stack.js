var Stack = function () {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  for (var key in this.storage) {
    var nextIndex = Number(key) + 1;
    this.storage[nextIndex] = this.storage[key];
  }
  this.storage[0] = value;
};

stackMethods.pop = function () {
  var result = this.storage[0];
  for (var key in this.storage) {
    if (key === '0') {
      continue;
    } else {
      var prevIndex = Number(key) - 1;
      this.storage[prevIndex] = this.storage[key];
    }
  }
  var last = Object.keys(this.storage).length;
  delete this.storage[last - 1];
  return result;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};




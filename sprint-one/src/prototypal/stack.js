var Stack = function () {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var end = this.size();

  for (var i = end; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }

  this.storage[0] = value;
};

stackMethods.pop = function () {
  var result = this.storage[0];
  var end = this.size();

  for (var i = 1; i < end; i++) {
    this.storage[i - 1] = this.storage[i];
  }

  delete this.storage[end - 1];
  return result;
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};




var Stack = function () {
  this.storage = {};
};

Stack.prototype.push = function (value) {
  var end = this.size();

  for (var i = end; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }

  this.storage[0] = value;
};

Stack.prototype.pop = function () {
  var result = this.storage[0];
  var end = this.size();

  for (var i = 1; i < end; i++) {
    this.storage[i - 1] = this.storage[i];
  }

  delete this.storage[end - 1];
  return result;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


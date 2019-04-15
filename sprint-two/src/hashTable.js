

var HashTable = function () {
  this._limit = 8;
  this._load = 0;
  this._loadFactor = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  this._load += 1;
  this._loadFactor = this._load / this._limit;

  if (this._loadFactor > 0.75) {
    this._limit *= 2;
    var previous = this.retrieveAllValues();
    this._storage = LimitedArray(this._limit);
    this._loadFactor = this._load / this._limit;
    this.reinsert(previous);

  }

  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    this._storage[index] = new Array();
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        return;
      }
    }
  }

  this._storage[index].push([k, v]);

};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  } else {
    return undefined;
  }

};

HashTable.prototype.remove = function (k) {
  this._load -= 1;
  this._loadFactor = this._load / this._limit;

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index].splice(i, 1);
      }
    }
  } else {
    return undefined;
  }

  if (this._loadFactor < 0.25 && this._limit > 8) {
    this._limit *= 0.5;
    var previous = this.retrieveAllValues();
    this._storage = LimitedArray(this._limit);
    this._loadFactor = this._load / this._limit;
    this.reinsert(previous);
  }
};

HashTable.prototype.retrieveAllValues = function () {
  var allPairs = [];
  for (var index in this._storage) {
    if (Array.isArray(this._storage[index])) {
      for (var j = 0; j < this._storage[index].length; j++) {
        allPairs.push(this._storage[index][j]);
      }

    }
  }
  return allPairs;
};

HashTable.prototype.reinsert = function (values) {
  for (var i = 0; i < values.length; i++) {
    var k = values[i][0];
    var v = values[i][1];

    var index = getIndexBelowMaxForKey(k, this._limit);

    if (!this._storage[index]) {
      this._storage[index] = new Array();
    } else {
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === k) {
          this._storage[index][i][1] = v;
          return;
        }
      }
    }

    this._storage[index].push([k, v]);

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert, retrieve, remove - assuming we have a good and efficient hash function, time complexity is O(n)
 */



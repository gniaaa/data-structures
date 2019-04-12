var BinarySearchTree = function(value) {
    var tree = Object.create(BinarySearchTreeMethods);
    tree.value = value;
    tree.left = null;
    tree.right = null;
    return tree;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);

  if (value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value); 
    }  
  }

};

BinarySearchTreeMethods.contains = function(value) {
  
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value); 
    }  
  }

};

BinarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

}

/*
 * Complexity: What is the time complexity of the above functions?
 insert and contains have O(log n) time complexity
 depthFirstLog has O(n) time complexity
 */

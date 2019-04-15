var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newNode = Tree(value);
  newNode.parent = this;
  this.children.push(newNode);
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function () {
  var parent = this.parent;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i].value === this.value) {
      parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild has O(1) time complexity
 for n = total number of nodes, treeMethods has O(n) time complexity
 */

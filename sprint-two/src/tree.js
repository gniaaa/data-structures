var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  var newNode = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 addChild has O(1) time complexity
 for n = total number of nodes, treeMethods has O(n) time complexity
 */

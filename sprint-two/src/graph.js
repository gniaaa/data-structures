
// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (var key in this.nodes) {
    if (this.hasEdge(key, node)) {
      this.removeEdge(key, node);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  var fromNodeParsed = JSON.parse(fromNode);
  var index1 = this.nodes[fromNodeParsed].indexOf(toNode);
  var index2 = this.nodes[toNode].indexOf(fromNodeParsed);

  if (index1 !== -1 && index2 !== -1) {
    this.nodes[fromNodeParsed].splice(index1, 1);
    this.nodes[toNode].splice(index2, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

Graph.prototype.traverseDFS = function(node) {
  // check if input node exists in graph when initializing
  if (!this.nodes.hasOwnProperty(node)) {
    return -1;
  }
  // keep track of visited nodes
  var visitedObj = {};
  var visitedArr = [];
  // keep reference to initial graph and not global object
  var self = this;

  var helperTraverse = function(node) {
    if (visitedObj.hasOwnProperty(node)) {
      return;
    } else {
      visitedObj[node] = node;
      visitedArr.push(node);
      for (var i = 0; i < self.nodes[node].length; i++) {
        helperTraverse(self.nodes[node][i]);
      }
    }
  }

  helperTraverse(node);
  return visitedArr;
};

Graph.prototype.traverseBFS = function(node) {
  // check if input node exists in graph when initializing
  if (!this.nodes.hasOwnProperty(node)) {
    return -1;
  }
  // keep track of visited nodes
  var visitedObj = {};
  visitedObj[node] = node;

  var visitedArr = [node];
  var queue = [node];

  while (queue.length > 0) {
    var currentNode = queue[0];
    for (var i = 0; i < this.nodes[currentNode].length; i++) {
      var edgeNode = this.nodes[currentNode][i];
      if (!visitedObj.hasOwnProperty(edgeNode)) {
        visitedObj[edgeNode] = edgeNode;
        visitedArr.push(edgeNode);
        queue.push(edgeNode);
      }
    }
    queue.shift();
  }

  return visitedArr;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode - O(1);
 contains - O(1);
 removeNode - O(n);
 hasEdge - O(n);
 addEdge - O(1);
 removeEdge - O(n) finding indices is linear
 forEachNode - O(n)
 */



var DoubleLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function (value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var currentHead = list.head;
      currentHead.previous = newNode;
      newNode.next = currentHead;
      list.head = newNode;
    }
  };

  list.removeHead = function () {
    if (list.head === null) {
      return -1;
    }

    var currentHead = list.head;

    if (currentHead.next !== null) {
      var nextHead = currentHead.next;
      nextHead.previous = null;
      currentHead.next = null;
      list.head = nextHead;
    } else {
      list.head = null;
      list.tail = null;
    }

    return currentHead.value;
  };

  list.addToTail = function (value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var currentTail = list.tail;
      currentTail.next = newNode;
      newNode.previous = currentTail;
      list.tail = newNode;
    }
  };

  list.removeTail = function () {
    if (list.tail === null) {
      return -1;
    }

    var currentTail = list.tail;

    if (currentTail.previous !== null) {
      var newTail = currentTail.previous;
      currentTail.previous = null;
      newTail.next = null;
      list.tail = newTail;
    } else {
      list.head = null;
      list.tail = null;
    }

    return currentTail.value;
  };

  list.contains = function (target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 // addTotail and removeHead are O(1) time complexity
 // contains is O(n) time complexity
 */

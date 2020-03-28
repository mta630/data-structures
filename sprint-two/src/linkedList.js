var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToTail = function(value) {
    var nodeToAdd = Node(value);

    if (list.head === null) {
      list.head = nodeToAdd;
    } else {
      list.tail.next = nodeToAdd;
    }
    list.tail = nodeToAdd;

  };

  list.removeHead = function() {
    var headValue = list.head.value;

    list.head = list.head.next;

    return headValue;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail = O(1)
 * removeHead = O(1)
 * contains = O(n)
 */


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  }
  for (var i = 0; i < this.children.length; i ++) {
    result = this.children[i].contains(target);
    if (result) {
      break;
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 *
 *  addChild = O(1)
 *  contains = O(n)
 *
 */



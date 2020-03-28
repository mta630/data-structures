var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var binaryMethods = {};

binaryMethods.insert = function (value) {

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

binaryMethods.contains = function (value) {
/*
  SOLUTION 1
  ---------------------------------------
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
*/

  /*
  SOLUTION 2
  ---------------------------------------
*/
  var isFound = false;

  var search = function (node) {

    if (value === node.value) {
      isFound = true;
    }
    if (!isFound && value < node.value && node.left) {
      search(node.left);
    }
    if (!isFound && value > node.value && node.right) {
      search(node.right);
    }
  };

  search(this);
  return isFound;

};

binaryMethods.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

  insert - O(log n)
  contains - O(log n)
  depthFirstLog - O(n)

 */



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {
    var newTuple = [k, v];
    bucket = [];
    bucket.push(newTuple);
    this._storage.set(index, bucket);
  } else {

    bucket = this._storage.get(index);
    var isFound = false;

    if (bucket.length > 0) {
      for (var i = 0; i < bucket.length; i ++) {
        if (bucket[i][0] === k) {
          isFound = true;
          bucket[i][1] = v;
        }
      }
      if (!isFound) {
        bucket.push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    return null;
  }

  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket.length === 1) {
    var tuple = bucket[0];
    if (tuple[0] === k) {
      var result = tuple[1];
      tuple[1] = undefined;
      return result;
    }
  } else {

    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        var result = tuple[1];
        tuple[1] = undefined;
        return result;
      }
    }
  }
};











/*
 * Complexity: What is the time complexity of the above functions?
 *  insert: O(1)
 *  retreive: O(1)
 *  remove: O(1)
 *
 *
 *
 */



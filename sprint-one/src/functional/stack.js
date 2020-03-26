var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length + 1] = value;
    count ++;
  };

  someInstance.pop = function() {
    var result = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];
    if (count !== 0) {
      count --;
    }
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

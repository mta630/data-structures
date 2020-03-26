var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var len = Object.keys(storage).length;
    if (Object.keys(storage).length === 0){
      storage[0] = value;
    } else {
      for (var i = len; i >= 0; i--) {
        if (i === 0 ) {
          storage[i] = value;
        } else {
        storage[i] = storage[i - 1];
        }
      }
    }
    count ++;
  };



  someInstance.dequeue = function() {
    var result = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    if (count !== 0){
      count --;
    }
    return result;
  };

  someInstance.size = function() {

    return count;
  };

  return someInstance;
};



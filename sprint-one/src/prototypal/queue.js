var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

  queueMethods.enqueue = function (value) {
    if (this.size() === 0){
      this.storage[0] = value;
    } else {
      for (var i = this.size(); i >= 0; i --){
        if (i === 0){
          this.storage[i] = value;
        } else {
          this.storage[i] = this.storage[i - 1];
        }
      }
    }
    this.count ++;
  }

  queueMethods.dequeue = function () {
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    if (this.count !== 0) {
      this.count --;
    }
    return result;
  }

  queueMethods.size = function () {
    return this.count;
  }

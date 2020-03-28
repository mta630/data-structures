var Queue = function() {
  this.storage = {};
  this.count = 0;
};


Queue.prototype.enqueue = function (value) {
  if (this.size() === 0) {
    this.storage[0] = value;
  } else {
    for (var i = this.size(); i >= 0; i --) {
      if (i === 0) {
        this.storage[i] = value;
      } else {
        this.storage[i] = this.storage[i - 1];
      }
    }
  }
  this.count ++;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  if (this.count !== 0) {
    this.count --;
  }
  return result;
};

Queue.prototype.size = function () {
  return this.count;
};


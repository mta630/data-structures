var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.size() + 1] = value;
  this.count ++;
};

stackMethods.pop = function () {
  var result = this.storage[this.size()];
  delete this.storage[this.size()];
  if (this.count !== 0) {
    this.count --;
  }
  return result;
};

stackMethods.size = function() {
  return this.count;
};

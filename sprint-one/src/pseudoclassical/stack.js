var Stack = function() {
  this.storage = {};
  this.count = 0;
};


Stack.prototype.push = function (value){
  this.storage[this.size() + 1] = value;
  this.count ++;
}

Stack.prototype.pop = function (){
  var result = this.storage[this.size()];
  delete this.storage[this.size()];
  if (this.count !== 0) {
    this.count --;
  }
  return result;
}

Stack.prototype.size = function(){
  return this.count;
}

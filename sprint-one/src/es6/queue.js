class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
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

  dequeue() {
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    if (this.count !== 0){
      this.count --;
    }
    return result;
  }

  size(){
    return this.count;
  }








}

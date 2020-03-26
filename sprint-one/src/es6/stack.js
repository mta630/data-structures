class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }


  push(value){
    this.storage[this.size() + 1] = value;
    this.count ++;
  }

  pop(){
    var result = this.storage[this.size()];
    delete this.storage[this.size()];
    if (this.count !== 0) {
      this.count --;
    }
    return result;
  }

  size(){
    return this.count;
  }

}
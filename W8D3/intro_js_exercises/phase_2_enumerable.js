Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let mapped = [];
  this.myEach(el => mapped.push(callback(el)));
  return mapped;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;
  if (!initialValue) {
    initialValue = this[0];
    arr = this.slice(1, this.length);
  }
  arr.myEach(ele => initialValue = callback(initialValue, ele));
  return initialValue;
};


Array.prototype.uniq = function() {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (!res.includes(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.twoSum = function() {
  let pairs = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

Array.prototype.transpose = function() {
  let transposed = [];
  for (let i = 0; i < this.length; i++) {
    let trans_row = [];
    for (let j = 0; j < this.length; j++) {
      trans_row.push(this[j][i]);
    }
    transposed.push(trans_row);
  }
  return transposed;
};
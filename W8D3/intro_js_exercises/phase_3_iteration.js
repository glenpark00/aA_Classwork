Array.prototype.bubbleSort = function() {
  let arr = this;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        // arr[i], arr[i+1] = arr[i+1], arr[i]; CANNOT DO DUAL REASSINGMENT
        // temp = arr[i]; 
        // arr[i] = arr[i+1];
        // arr[i+1] = temp; YOU CAN DO IT THIS WAY, BUT...
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // YOU CAN DO DESTRUCTURING ASSIGNMENT
        sorted = false;
      }
    }
  }
  return arr;
};

String.prototype.substrings = function() {
  let substr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      substr.push(this.slice(i, j));
    }
  }
  return substr;
};
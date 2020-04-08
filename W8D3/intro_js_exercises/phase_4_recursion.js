function range(start, end) {
  if (start > end) {
    return [];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else {
    if (exp % 2 == 0) {
      return Math.pow(exponent2(base, exp / 2), 2);
    } else {
      return base * Math.pow(exponent2(base, (exp - 1) / 2), 2); 
    }
  }
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    prev_num = fibonacci(n - 1);
    next_num = prev_num[prev_num.length - 1] + prev_num[prev_num.length - 2]
    return prev_num.concat(next_num);
  }
}

function deepDup(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push([deepDup(arr[i])]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
// ################# Sum ###########################
// Write a sum function that takes any number of arguments:

// Solve it first using the arguments keyword, then rewrite your solution to use the ...rest operator.

// function sum() {
//   let nums = Array.from(arguments);
//   return nums.reduce((acc, ele) => {
//     return acc += ele;
//   });
// }

function sum(...args) {
  return args.reduce(function(acc, ele) {
    return acc += ele;
  });
}

// console.log(sum(1, 2, 3, 4)); // === 10;
// console.log(sum(1, 2, 3, 4, 5)); // === 15;




// ############# bind with args ######################
// Rewrite your myBind method so that it can take both bind - time arguments and call - time arguments.

// Function.prototype.myBind = function () {
//   let that = this;
//   let context = arguments[0];
//   let bindArgs = Array.from(arguments).slice(1);
//   return function () {
//     let callArgs = Array.from(arguments);
//     return that.apply(context, bindArgs.concat(callArgs));
//   };
// };

// Solve it first using the arguments keyword.

// Within your myBind method, you'll have to define a new, anonymous function to be returned. Be careful: using arguments inside the anonymous function will not give you the arguments passed to myBind, because arguments is reset on every function invocation (just like this).

// That makes sense, because there are two arrays of arguments you care about: the extra arguments passed to myBind, and the arguments passed when the bound function is called.

// Once you've done that, write a second version using the ... rest operator.


// A few examples:

Function.prototype.myBind = function (...bindArgs) {
  let context = bindArgs[0];
  return (...callArgs) => this.apply(context, bindArgs.slice(1).concat(callArgs));
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

// #################### Curried Sum ############################
// Write a curriedSum function that takes an integer(how many numbers to sum) and returns a function that can be successively called with single arguments until it finally returns a sum. 
function curriedSum(numArgs) {
  let numbers = [];
  return _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(function(acc, ele) {
        return acc += ele;
      });
    } else {
      return _curriedSum;
    }
  };
}

// const summation = curriedSum(4);
// console.log(summation(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  let that = this;
  let args = [];
  return _curriedFunc = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      // return that(...args);
      return that.apply(0, args);
    } else {
      return _curriedFunc;
    }
  };
};

// const currySum = sum.curry(4);
// console.log(currySum(5)(30)(20)(1)); // => 56
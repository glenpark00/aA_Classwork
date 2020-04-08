// function sum() {
//     let nums = Array.from(arguments);
//     let result =  nums.reduce(
//         (acc, ele)=>{
//             return acc += ele;
//         }
//     );
//     return result;
// }

function sum(...args) {
    let result = args.reduce(
        (acc, ele)=>{
            return acc += ele;
        }
    );
    return result;
}

// console.log(sum(1, 2, 3, 4));//=== 10;
// console.log(sum(1, 2, 3, 4, 5)); //=== 15;

// Function.prototype.myBind = function() {
//   const args = Array.from(arguments);
//   let that = this;
//   return function () {
//     let subject = args[0];
//     // FAT ARROW FUNCTIONS DO NOT HAVE arguments :(
//     that.apply(subject, args.slice(1).concat(Array.from(arguments)));
//   };
// };

// Function.prototype.myBind = function(...args1) {
//   let that = this;
//   return function (...args2) {
//     that.apply(args1[0], args1.slice(1).concat(args2));
//   };
// };



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

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

//markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
// markov.says.myBind(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
// markov.says.myBind(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
    let numbers = [];
    return function _curriedSum(num) {
        // debugger
        numbers.push(num);
        if (numbers.length === numArgs){
            return numbers.reduce(
                (acc, ele)=>{
                    return acc += ele;
                });
        } else {
            return _curriedSum;
        }
    };
    
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  // for (let i = 0; i < numArgs; i++) {
  //   if (i === numArgs) {
  //     return numbers;
  //   }
  //   return this.apply(num);
  // }
  let numbers = [];
  let that = this;
  const _curry = function(arg) {
    numbers.push(arg);
    if (numbers.length === numArgs){
        return that.apply(this, numbers);
        // return that(...numbers);
    }else{
        return _curry;
    }
  };
  return _curry;
};

const currySum = sum.curry(4);
console.log(currySum(5)(30)(20)(1)); // 56
const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1,el2,cb) {
    reader.question(`Is ${el1} greater than ${el2}?`, function(res) {
        console.log(res);
        if (res === 'yes') {
            return cb(true);
        } else {
            return cb(false);
        }
    });
}

function innerBubbleSortLoop(array, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == array.length - 1) {
        return outerBubbleSortLoop(madeAnySwaps);
    }
    if (i < array.length - 1) {
        askIfGreaterThan(array[i],array[i + 1], function(isGreaterThan) {
            if (isGreaterThan) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(array, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
    }
}

let array = [5,1,3,4,2];
innerBubbleSortLoop(array,0,false,function(){console.log("outerBubbleSort");});
console.log(array);
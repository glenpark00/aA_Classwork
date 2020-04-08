const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    return completionCallback(sum);
  }

  if (numsLeft > 0) {
    reader.question("Gimme a number, HOOMAN", function (res) {
      sum = sum + parseInt(res);
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
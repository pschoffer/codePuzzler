/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
let temp = 999;
// n = 0
if (n == 0) {
  console.log("0");
} else {
  // let temps = [14, -5, -5]; => -5 NOT 5

  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    // temp = -5; t = 5
    isLower = Math.abs(t) < Math.abs(temp);
    isEqual = Math.abs(t) == Math.abs(temp) && t > 0;
    if (isLower || isEqual) {
      temp = t;
    }

    console.error(t);
  }

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  console.log(temp);
}

// Create array and fetch indexed value
let arr = [1, 2, "apple", 3.14];
//   [0, 1,   2,      3 ]
console.log(arr[2]);

// Push pop
arr.pop();
arr.push(56);
console.log(arr);

// Shift unshift
arr.shift();
arr.unshift([1, 2, 3]);
console.log(arr);

// Length
console.log(arr.length);

// Object
let wierdDude = {
  name: "Alex",
  kids: 0.89,
  hair: true
};

console.log(wierdDude.kids);

// While (numbers till 5+)

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let number = 1;
while (number <= 100) {
  console.log(number);
  number++;
}

// For (sum of items)

let items = [
  { name: "book", qt: 2 },
  { name: "pen", qt: 23 },
  { name: "block", qt: 7 },
  { name: "apples", qt: 16 }
];

let sum = 0;
for (let index = 0; index < items.length; index++) {
  sum += items[index].qt;
}

console.log("Sum is: " + sum);

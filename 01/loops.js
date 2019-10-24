// While (print numbers till 5+)
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
let bagpack = [
  { name: "pen", qty: 3 },
  { name: "notepad", qty: 1 },
  { name: "icecube", qty: 10 }
];

let itemsCount = 0;
for (let index = 0; index < bagpack.length; index++) {
  itemsCount += bagpack[index].qty;
}
console.log("In backpack there are: ", itemsCount);

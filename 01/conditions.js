// If (shopping cart)

let shoppingCart = ["milk", "bacon"];

if (shoppingCart.length > 2) {
  shoppingCart.push("bag");
}

console.log("Shopping cart contains: ", shoppingCart);
console.log("\n\n\n");

// Else (directions)

// let direction = "East";
// console.log("You are going " + direction);

// if (direction == "North") {
//   console.log("Welcome to Ingelsta");
// } else if (direction == "South") {
//   console.log("Welcome to Ljura");
// } else {
//   console.log("Welcome to somwhere else:)");
// }

// Switch

let direction = "East";
console.log("You are going " + direction);

switch (direction) {
  case "North":
    console.log("Welcome to Ingelsta");
    break;
  case "South":
    console.log("Welcome to Ljura");
    break;
  case "East":
  case "West":
    console.log("Welcome to somwhere else:)");
    break;
  default:
    console.log("WRONG direction!");
}

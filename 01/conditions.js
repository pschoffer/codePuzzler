// If (shopping cart)
let shoppingCart = ["milk", "egg", "pokemonCard"];

if (shoppingCart.length > 2) {
  shoppingCart.push("bag");
}

// console.log(shoppingCart);

// Else (directions)
// let direction = "West";

// if (direction == "North") {
//   console.log("Welcome to Ingelsta");
// } else if (direction == "South") {
//   console.log("Welcome to Ljura - paradise");
// } else {
//   console.error("PANIC! WHERE AM I");
// }

// Switch
let direction = "East";

switch (direction) {
  case "North":
    console.log("Welcome to Ingelsta");
    break;
  case "South":
    console.log("Welcome to Ljura - paradise");
    break;
  case "East":
  case "West":
    console.log("Welcome to totally different place.");
    break;
  default:
    console.error("PANIC! WHERE AM I");
}

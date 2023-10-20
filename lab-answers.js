////////////////////////////////
// Easy Going
////////////////////////////////
//Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i < 21; i++) {
	console.log(i);
}
console.log("This is the end of 'Easy Going'");

////////////////////////////////
// Get Even
////////////////////////////////
//Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i < 201; i+=2) {
	console.log(i);
}
console.log("This is the end of 'Get Even'");

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// 1. Write a Javascript Application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3, log "Fizz" instead of the number.
// 3. If a number is divisible by 5, log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number. The commit message should read: "Fizz Buzz answered"
for (let i = 1; i < 101; i++) {
	
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
console.log("This is the end of 'Fizz Buzz'");

////////////////////////////////
// Wild Wild Life 
////////////////////////////////
//Given:
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
//Alter:
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
let planteeAge = plantee.indexOf(5000);
if (planteeAge !== 5001) {
    plantee[planteeAge] = 5001;
}
console.log(plantee);
// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = wolfy[3].replace('Yukon Territory', 'Gotham City');
console.log(wolfy);
// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push('Hawkins');
console.log(dart);
// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
let porgeeIsBossy = wolfy.splice(0,1, 'Gameboy')
console.log(wolfy);
console.log("This is the end of 'Wild Wild Life'");

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// 2. Use a for of loop to call toUpperCase() on each of them and print out the result. Haven't heard of for of loops?
for (const name of ninjaTurtles) {
    const uppercaseTurtle = name.toUpperCase();
    console.log(uppercaseTurtle);
  }
console.log("This is the end of 'Yell at the Ninja Turtles'");

////////////////////////////////
// Methods, Revisted
////////////////////////////////

console.log("This is the end of 'Methods,Revisted'");

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
// Excited Kitten
////////////////////////////////


////////////////////////////////
// Find the Median
////////////////////////////////


/////////////////////////////////////////////////////
// Hungry for More?                                //
/////////////////////////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

////////////////////////////////
// Alien Attire
////////////////////////////////


////////////////////////////////
// Dress Us Up
////////////////////////////////


////////////////////////////////
// Dirty Laundry
////////////////////////////////


////////////////////////////////
// Inventory
////////////////////////////////

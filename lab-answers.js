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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// 0. Console log the index of Titanic.
const indexOfTitanic = favMovies.indexOf('Titanic');
console.log("The index of 'Titanic' is [" + indexOfTitanic + "].");
// 1. Use the .sort method.
favMovies.sort();
console.log(favMovies);
//     Thought Question: What did this do to the array? Did it permanently alter it? // It has permanently sorted favMovies alphabetically. 
// 2. Use the method pop.
console.log(favMovies.pop());
console.log(favMovies);
// 3. push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
// 4. Reverse the array.
const reversedMovies = favMovies.reverse();
console.log('Reversed:', reversedMovies);
console.log(favMovies);
// 5. Use the shift method.
const shiftRemovesFirst = favMovies.shift();
console.log(shiftRemovesFirst,favMovies);
// 6. unshift - what does it return? //It returns a new string attached to the beginning of the favMovies array
favMovies.unshift('Encanto');
console.log(favMovies);
// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
const indexOfDjango = favMovies.indexOf('Django Unchained');
console.log(indexOfDjango);
favMovies.splice(15,1, 'Avatar');
console.log(favMovies);
//     Thought Question: Did this permanently alter our array? //yes
//     slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
const middleIndex = favMovies[Math.floor(favMovies.length / 2)];
console.log(middleIndex);
const indexOfMiddle = favMovies.indexOf(middleIndex);
console.log("The index of the middle of the array is [" + indexOfMiddle + "].");
const slicedMovies = favMovies.slice(9);
console.log("Movies, sliced: " + slicedMovies); 
console.log("This is the list of favorite movies: " + favMovies);
//     Thought Question: Did this permanently alter our array? // slice did not permanently alter the array
// 8. Store the value of your slice in a variable and console.log it.
//     Thought Question: What is going on here? 
console.log(slicedMovies);
// 9. console.log your final results.
console.log(favMovies);
// 10. After running the above tasks, console.log the index of "Fast and Furious."
const indexOfFaF = favMovies.indexOf('Fast and Furious');
console.log("The index of Fast and Furious is [" + indexOfFaF + "].");
// 11. We removed it from the array. What value do we get when we look for the index of something that is not in the array?// Django exists on index "-1."
const newIndexOfDjango = favMovies.indexOf('Django Unchained');
console.log(newIndexOfDjango);
//     Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? Should we have used let?
console.log("This is the end of 'Methods, Revisted'");

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
// 1. Remove Eggbert (hint look at the slice/splice methods).
const indexOfEggbert = whereIsWaldo.indexOf('Eggbert');
console.log(indexOfEggbert);
const removeEggbert = whereIsWaldo.splice(indexOfEggbert, 1);
console.log(whereIsWaldo);
// 2. Change "Neff" to "No One".
// Loop through the outer array
for (let i = 0; i < whereIsWaldo.length; i++) {
    if (Array.isArray(whereIsWaldo[i])) {
      for (let j = 0; j < whereIsWaldo[i].length; j++) {
        if (whereIsWaldo[i][j] === 'Neff') {
          whereIsWaldo[i][j] = 'No One';
        }
      }
    }
  }
// console.log(whereIsWaldo);
console.log(whereIsWaldo);
// 3. Access and console.log "Waldo".
/*
const whereIsWaldo = [
  ['Timmy', 'Frank'],
  ['Lucinda', 'Jacc', 'No One', 'Snoop'],
  ['Petunia', ['Baked Goods', 'Waldo']]
];
*/
const hiWaldo = whereIsWaldo[2][1][1];
console.log(hiWaldo);
console.log("This is the end of 'Where is Waldo'");

////////////////////////////////
// Excited Kitten
////////////////////////////////
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for (let i = 1; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!");
//   }

// 2. For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random.
function getRandomMessage() {
    const messages = [
      "...human... why you taking pictures of me...",
      "...the catnip made me do it...",
      "...why does the red dot always get away...",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }


for (let i = 0; i <= 20; i++) {

    if (i % 2 !== 0) {
        console.log("Love me, pet me! HSSSSSS!");
    } else {
        const kittenVoiceLine = getRandomMessage();
        console.log(kittenVoiceLine);
    }
  }

console.log("This is the end of 'Excited Kitten'");

////////////////////////////////
// Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// 1. Find the median number in the following nums array, then console.log that number.
//put numbers in order
nums.sort((a, b) => a - b);
console.log(nums);
/* const nums is now =[
    11, 11, 11, 11, 12, 12, 12, 12,
    13, 14, 14, 15, 15, 15, 15, 16,
    16, 17, 17, 17, 18, 18, 19, 19,
    71] 
*/
//find how many numbers are in array, even or odd number, aka the length of the array
const length = nums.length;
console.log("Length of the 'nums' is [" + length + "]");

const middle = Math.floor(nums.length / 2);

if (nums.length % 2 === 1) {
    const median = nums[middle];
    console.log("The median is " + median + ".");
};

// * Hint: If you check the length of the array divided by two, you might get not get a whole number. In which case, look into Math.floor().
// Expected output: 15
console.log("This is the end of 'Find the Median'");

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

# R-ALAB 308H.4.2 - Arrays, Loops, and Conditionals

## Learning Objectives
In this lab, you'll be solving some traditional challenges that will test your ability to:

- Manipulate arrays in JavaScript.
- Create loops to accomplish tasks to specification.
- Use conditional statement to test for logic cases.
- Develop critical thinking skills that incorporate what you've learned so far.

## Instructions
1. Create a local JavaScript file to record your answers (maybe name it lab-answers.js or something similarly descriptive).
2. Keep your answers organized! Included a commented header for each section in your answers file. Something like the following:
```
////////////////////////////////
// Easy Going
////////////////////////////////


////////////////////////////////
// Get Even
////////////////////////////////


////////////////////////////////
// Fizz Buzz
////////////////////////////////

etc...
```

3. TEST YOUR WORK! Make sure that your code works using node name_of_your_file.js.
4. If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later. You may find some later problems easier or need a break from what you're working on. Sometimes it is helpful to set some fresh eyes on something you've been stuck on.
5. After each section (even if you're not fully done with it), add and commit your work.

 - Please use the commit messages that you see at the end of each section (modify it if you need to for partial solves, e.g. checkers almost solved). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.
6. When you are done with your lab, push it to your origin (this is your GitHub) and make an issue on our repo. 

## Deliverables
- A JavaScript file that runs without syntax errors (comment out stuff that doesn't work).
- A coded solution for each of the problems statements below.
- At least one git commit message per problem, as described below.

## Easy Going
Write a for loop that will log the numbers 1 through 20.

The commit message should read: "Easy Going answered"

## Get Even
Write a for loop that will log only the even numbers in 0 through 200.

* Hint: Think about the increment expression.

The commit message should read: "Get Even answered"


## Fizz Buzz
This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.

1. Write a Javascript Application that logs all numbers from 1 - 100.
2. If a number is divisible by 3, log "Fizz" instead of the number.
3. If a number is divisible by 5, log "Buzz" instead of the number.
4. If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
The commit message should read: "Fizz Buzz answered"


## Wild Wild Life
Use the following arrays to answer the questions below (name, species, age, hometown).

You should be modifying the elements by accessing them. It is up to you which methods to use.
```
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
Plantee just had her birthday; change Plantee's array to reflect her being a year older.
Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
Give D'Art a second hometown by adding "Hawkins"
Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
```
The commit message should read: "Wild Wild Life answered"


## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
2. Use a for of loop to call toUpperCase() on each of them and print out the result.
Haven't heard of for of loops?

As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

The commit message should read: "Yell at the Ninja Turtles answered"


## Methods, Revisited
Here is a list of favorite movies:
```
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
```
* Console log the index of Titanic.

Do the following and console.log the final results. (I have included some thought questions; you don't have to write out an answer for those marked as such).

Note: if you have to add to the array, feel free to add any movie you'd like.

1. Use the .sort method.
2. Thought Question: What did this do to the array? Did it permanently alter it?
3. Use the method pop.
4. push "Guardians of the Galaxy".
5. Reverse the array.
6. Use the shift method.
7. unshift - what does it return?
8. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
9. Thought Question: Did this permanently alter our array?
10. slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
11. Thought Question: Did this permanently alter our array?
12. Store the value of your slice in a variable and console.log it.
13. Thought Question: What is going on here?
14. console.log your final results.

After running the above tasks, console.log the index of "Fast and Furious."

* We removed it from the array. What value do we get when we look for the index of something that is not in the array?
* Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? Should we have used let?

The commit message should read: "Methods Revisited answered"


## Where is Waldo
With the following multi-dimensional array:
```
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
Remove Eggbert (hint look at the slice/splice methods).
Change "Neff" to "No One".
Access and console.log "Waldo".
The commit message should read: "Where is Waldo answered"
```

## Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
2. For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random.

The commit message should read: "Excited Kittens answered"


## Find the Median
Find the median number in the following nums array, then console.log that number.

* Hint: If you check the length of the array divided by two, you might get not get a whole number. In which case, look into Math.floor().
```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output: 15
```
The commit message should read: "Find the Median answered"


## Hungry for More?
**The remainder of these problems are optional;** however, we encourage more practice whenever you have the time for it!

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```
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
```

## Alien Attire
Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer!

* Remove Kristyn's shoe from the array and save it to the variable kristynsShoe.
* Use that variable to add Kristyn's lost shoe to Thom's accessories array.
The commit message should read: "Kristyn's lost shoe found"


## Dress Us Up
Modify your code to put together three separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

The commit message should read: "Kristyn and Thom have their outfits ready for class - array practice"


## Dirty Laundry
Time to do laundry. Loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

The commit message should read: "Washed dirty laundry"


## Inventory
Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

The commit message should read: "Hungry for More: Complete"


Copyright © Per Scholas 2023


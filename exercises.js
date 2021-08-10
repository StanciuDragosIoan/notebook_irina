/*
 * Exercise 1 - scope
 */

// what will happen if I run ?
/*
     daca muti linia 22 deasupra liniei 20, iti da eroare pentru ca 
     'global environment' nu ti-a 'creat' variabila food;

     daca insa rulezi asa cum e, linia 22 nu o sa dea eroare, pentru ca 
     executand functia test() la linia 20, 'global env' deja ti-a definit
     variabila food

    daca pui 'use strict' nu mai merge si da eroare
*/
/*
function test() {
  food = "Pizza";
  console.log(food);
}

test();

console.log(food);
*/

/*
 * Exercise 2 - scope
 */

// what happens if I run the below code?

/*
let hamInTheGlobalScope = "spam"; // variable in the global scope!

if (hamInTheGlobalScope) {
  // local scope for block created!
  var toastInTheBlockScope = "toast"; // variable is declared in the local scope of the block
  console.log(hamInTheGlobalScope); // logs 'spam'; outer scope variables are accessible
}

console.log(toastInTheBlockScope);
*/

/*
    line 44 does NOT throw error (as var is not limited to block-lvl scope)
    what happens if we replace var at line 40 with let or const?
    line 44 will throw error as let/const are block-lvl scope


*/

/*
 * Exercise 1 - call apply bind
 */

// write a function that receives an array and returns the highest element of it

/*
const array = [1, 2, 3];

function getMaxNumber(arr) {
  //code here
}

//sollution
//console.log(Math.max.apply(null, arr));

getMaxNumber(array); // should return 3
*/

/*
 * Exercise 2 - call apply bind (this keyword)
 */
//what will below log?

/*
function this1() {
  console.log(this);
}

this1(); //logs window/global object as this is what 'this' binds to inside a function
 
const test = {
  say() {
    console.log(this);
  },
};
test.say(); //logs the object test (so the parent object)

 
const testTHis = this;
const arrow = () => {
  console.log(this); //in arrow function this keyword will be bound to the outer this
};

arrow();
*/

/*
 * Exercise 1 - IIFE
 */

const iife = (function () {
  var data = 5;
  console.log("IIFE here.. :D");
})();

// what will this log?
/*
console.log(data); //throws undefined error, data is only in the IIFE scope
*/

/*
 * Exercise 2 - IIFE
 */

const iife2 = (function () {
  var data = 5;
  console.log("IIFE 2 here.. :D");
})();

//how do I log the data prop? (you cannot unless you return it specifically)
/*
  console.log(iife2.data); // this throws error as iife2 is 'undefined' in the global scope since we did not run it

  // we have to return from the iife specifically if we want to log like so:
const iife3 = (function () {
  var data = 6;
  console.log("I am a firendly IIFE that will share some data with u =)");
  return {
    data,
  };
})();

console.log(iife3.data); // not this works good =)
//however this does nod:
console.log(iife3().data); // we are returning an object with the data property from the IIFE, we are not returning a function so we can t 'run' the IIFE
*/

/*
 * Exercise 1 - Hoisting
 */

/*
//what is the output below:
hoister1();
function hoister1() {
  console.log("first to log!");
}

function hoister1() {
  console.log("second to log!");
}

//second to log 'logs' first as it is the last one declared and hoisted
*/

/*
 * Exercise 2 - Hoisting
 */

/*


//what s the output of below:
var favBook = "Gone with the wind";

const sayMyFavB00k = () => {
  //since we are using favBook before declaring it, the JS engine sets it to undefined
  console.log("and my favourite Book is " + favBook); //this logs undefined and not 'Gone with the wind' because we are in a function which has its own execution context, different from the global execution context

  var favBook = "Peter Pan";

  console.log("and my newly favourite book is " + favBook);
};

sayMyFavB00k(); // undefined and PeterPan
*/

/*
 * Exercise 1 - map, reduce, filter (map)
 */

//Make an array of numbers that are doubles of the first array

const double = (arr) => arr.map((i) => console.log(i * 2));
double([1, 2, 3]);

/*
 * Exercise 2 - map, reduce, filter (map)
 */

// write a function that takes a string as input and returns it with 1 word capitalized and 1 word lower cases
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function (string) {
  const split = string.split(" ");
  let output = "";
  split.map((item, index) => {
    index % 2 === 0
      ? (output += ` ${item.toUpperCase()}`)
      : (output += ` ${item}`);
  });
  return output;
};

swapCase("hey gurl, lets javascript together sometime");

/*
 * Exercise 1 - map, reduce, filter (reduce)
 */

//write a function that receives an array as numbers input and returns the total amount of its elements

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum); // 10

/*
 * Exercise 2 - map, reduce, filter (reduce)
 */

// write a function that restructures an object as per below:

/*
  const foods = [
    { name: "cheese", type: "protein" },
    { name: "meat", type: "protein" },
    { name: "butter", type: "fat" }
  ];

  myFunc(foods) =  
  {
    cheese: { type: "protein" },
    meat: { type: "protein" },
    butter: { type: "fat" }
  };

  const getMapFromArray = data =>
  data.reduce((acc, item) => {
    // add object key to our object i.e. butter: { type: 'fat' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});

*/

/*
 * Exercise 3 - map, reduce, filter (reduce)
 */

/*

// Write a function that takes a string and returns an object representing the character
// count for each letter. Use .reduce to build this object.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function (letters) {
  return letters.split("").reduce((acc, element) => {
    acc[element] ? acc[element]++ : (acc[element] = 1);
    return acc;
  }, {});
};

console.log(countLetters("abbcccddddeeeee"));

const arr = [3, 5, 1, 4, 2];
const total = arr.reduce((acc, item) => {
  return acc + item;
}, 0);
*/

/*
 * Exercise 1 - closure
 */

/*
// create a function that can be called only once

let view;
const myOnlyOnceCallableFunction = () => {
  let count = 0;
  return function () {
    if (count > 0) {
      return;
    } else {
      count++;

      view = "someCoolPinkyView";
      console.log("view has been set");
    }
  };
};

const call = myOnlyOnceCallableFunction();
call();
call();
call();
*/

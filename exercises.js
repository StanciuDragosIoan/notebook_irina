// exercise 1 - scope

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

// exercise 2 - scope

/*
    what happens if I run the below code?
    line 44 does NOT throw error (as var is not limited to block-lvl scope)
    what happens if we replace var at line 40 with let or const?
    line 44 will throw error as let/const are block-lvl scope


*/

/*
let hamInTheGlobalScope = "spam"; // variable in the global scope!

if (hamInTheGlobalScope) {
  // local scope for block created!
  var toastInTheBlockScope = "toast"; // variable is declared in the local scope of the block
  console.log(hamInTheGlobalScope); // logs 'spam'; outer scope variables are accessible
}

console.log(toastInTheBlockScope);
*/

// exercise 1 . call apply bind
/*
const array = [1, 2, 3];

function getMaxNumber(arr) {
  //code here
}

//sollution
//console.log(Math.max.apply(null, arr));

getMaxNumber(array); // should return 3
*/

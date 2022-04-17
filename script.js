'use strict';
/*
// function to calculate age
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //Function to print age
  function printAge() {
    let output = `${firstName},Your are ${age}, born in ${birthYear}`;
    console.log(output);
    //defining a block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //function scoped

      // Defining new variable name with the same name as the out scope's variable
      const firstName = 'Stephen';

      //reassigning outer scope's variable
      output = 'New Output';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);// it will cause an error
    console.log(millenial); // possible to access
    console.log(output);
    // console.log(add(2, 3)); //Uncaught ReferenceError: add is not defined since functions are also block scoped. When strict mode is disabled, the value is logged to the console
  }
  printAge();
  return age;
}

const firstName = 'Benson';
calcAge(1991);

//Hoisting and TDZ in practice

// Variables hoisting
//console.log(me); // Variables declared with var are hoisted but with the initial value of undefined.
// console.log(job); // We cant access job before it is initialized. JOB variable is till at TDZ
// console.log(year); //We cant access year before it is initialized. year variable is till at TDZ

var me = 'Benson';
let job = 'Teacher';
const year = 1991;

// Function Hoisting

//Using functions before they are declared
console.log(addDecl(2, 3)); // Function Declaration : output -> 5
console.log(addExpr(5, 5)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(3, 3)); //Uncaught ReferenceError: Cannot access 'addArrow' before initialization
//Function Declaration
function addDecl(a, b) {
  return a + b;
}

//Function Expression
const addExpr = function (a, b) {
  return a + b;
};

//Arrow Function

// const addArrow = (a, b) => {
//   return a + b;
// };
const addArrow = (a, b) => a + b;

//Example
// How the program should work: if there are no products,
// then the deleteShorpiingCart function will be executed.

console.log(`The value of of numProduct is ${numProduct}`);
// For this case, since value of numProduct is undefined,
// it triggers the execution of deleteShppingCart function below.
if (numProduct) deleteShoppingCart();
var numProduct = 10;
function deleteShoppingCart() {
  console.log('All products deleted.');
}

//Example 2
var x = 1; // creates properties on the window object
console.log(x === window.x); //returns true
let y = 2;
console.log(y === window.y); //returns false
const z = 3;
console.log(z === window.z); //returns false
//Let and const do not create properties on the global window object.
*/

//This Keyword

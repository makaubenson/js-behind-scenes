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
*/
//Hoisting and TDZ in practice

// Variables hoisting
console.log(me); // Variables declared with var are hoisted but with the initial value of undefined.
// console.log(job); // We cant access job before it is initialized. JOB variable is till at TDZ
// console.log(year); //We cant access year before it is initialized. year variable is till at TDZ

var me = 'Benson';
let job = 'Teacher';
const year = 1991;

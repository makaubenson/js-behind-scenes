'use strict';
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

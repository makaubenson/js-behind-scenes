'use strict';
// function to calculate age
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //Function to print age
  function printAge() {
    const output = `${firstName},Your are ${age}, born in ${birthYear}`;
    console.log(output);
    //defining a block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //function scoped
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);// it will cause an error
    console.log(millenial); // possible to access
  }
  printAge();
  return age;
}

const firstName = 'Benson';
calcAge(1991);

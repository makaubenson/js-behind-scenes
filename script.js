'use strict';
// function to calculate age
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //Function to print age
  function printAge() {
    const output = `${firstName},Your are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Benson';
calcAge(1991);

// code should always be work on conditional purposes 

// if statement
// if ( condition ) {                // if the condition is true the onlly it will run
    
// }

// how ot evaluate condition by true of false is by comparison  

 const diceRoll = 6

if (diceRoll <= 6) {
    console.log("U lost");
    
} else { 
    console.log("U won");
}

// example

const value = 200
if (value == 200 ) {
    const power = "fly"                 // if we give a var datatype then we can change the value inside the scope which is not good to use const or let
    console.log(`u may ${power}`);
    
}
// console.log(`value ${power}`);  // here we cant access power which is good because we are not able to access the power inside th functional scope


// ther is another way to execute if statements andd it called implicit scope which is written in one line and it assumes that we have writtern the return 
// eg
const check = 222
if (check ==222) console.log(`Hi i m implicit scope`);





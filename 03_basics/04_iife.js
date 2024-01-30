// named iife and simple iife simple means no name to the function
// immediately invoked functioin execution  (IIFE)
// it is used to immediately call the function 

// we dont want global scope to hinder  my function
// syntax of iife is parenthesis th whole function and then another parenthesis outside to call
//eg

(function value(num , num1) {
    console.log(num1+ num);
    
})(3,5);

// semi-colon is imp because iife dont know when to end the invoked so we need to give ;


// in arrow function ( 'here we write parmeter' ) => {}

( arrow = (name) => {
  console.log(name);
} )("sahil")


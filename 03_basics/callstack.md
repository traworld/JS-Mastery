javascript execution context 
it simply means how js runs this code 

JS runs code in 2 phases
first thing is when running the code it gets added to Global execution context and this GEC gets stored in .this keyword

and in this keyword window object is stored and this executes in thread
'
JS is single threaded

After GEC there is Functional exection contex
and then another is eval execution contest

As we know that there is 2 phases to run the code 
1. Memory Creation phase ( here all the variables will be assigned a value)
2.Execution phase


eg of memory allocation phase
let val = "sahil"
here in the memory allocation phase val will be assigned undefined as here only the variable name is assigned not the value so it willl be stored undefined

and in the function it will store 
eg 
function new (num1){
    console.log("num1")
}
new(2)

here the function will be stored like 
new and defination 

3. now there is execution phase

here we assign the value of it 

function 
so lets say we make a function and the result

function new (num1){
    console.log("num1")
}
new(2)

let result = new(2)
 

 // here in the memory allocation phase we will allocate the function as defination it means th functin i defined and in the result as the function is defined but not executed so in the execution phase we will be given a new sand box for the execution of the function 
 where it will be added as new environment variable and execution thread
 so now for the new sandbox there we will assign again the memory phase and execution phsase

 // so the return wil be gone to global executional context

 // so after the execution environment vsariable it gets delete after execution 

 // so if there are 3 functions and if we take the first function for execution adn it erequires two() it will also go into the execution phase but when removing it will follow the lifo last in first out
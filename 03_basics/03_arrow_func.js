// t oaccess current parent we use this keyword in child to acces the current value

// the content under curly braces is scope

const user= {
    name: "sahil",
    rollNo : 39,

    // now we want to print welcome message so we write a function 

    welcomemessage: function(){
          console.log(`${this.name} , welcome to the repo`);
    }

}

// console.log(welcomemessage());   // we cant direcly call welcomemessage we need to define where it is 
user.welcomemessage(); // we can directly run the function without moving it to console log

// we can change the valueinside the object 

// by printing only this method we get empty braces coz thir refers to something and if not is refered then it shows empty
// but in browser it ahows window out  put because of the engines 
// if we print this inside a function we get a lot of global values
// ************** this function doesnot work in function if referenced but it can ork in object





// syntax of arrow function ,, just remove function keyword from functin and write => beside ()

const work = () => {
    // this is a arrow function

    let username = "sammy"
    console.log(this.username);


}

work()    // output undefined coz this doesno work here

//basic arrow function

const value = (num1 , num2) => {           // in the  parametr we can add operators
      return num1 + num2
}

console.log(value(3 , 4));

// another arrow function  called implicit (maan leta hu aapko likhne ki zarorat nhi hai) return

// in this we dont need to write {} and return in the  next line and just need to give the parameter of return on the same line


const addTwo = (num , num1) => num+ num1   // we can write it as (num1 = num2)
console.log(addTwo(3,6));

// if we want to retur nan object we need to give parenthesis and inside  curly braces



// new learning 
// using this in a object
// here this means we are refereing to the current object if we dont use this and hardcode the name that is user.username here it means the username is being used only from the object called user but if we use this here then it will take the value form the nearest object

//When a function is a method inside an object, this refers to the object itself.

// this keyword is used if you have given a key named user and you. wanto to change it further u wont be able to change it as you have hardcoded that u have to take the username but if u use this keyword this means that whatever is there in the name you can use it so you can change the name using this keyword

// you print this then you get the value of current context object 


const test = function nav() {
    let username = "sahil"
    console.log(this.username);
    
} 

test() // here the asnwer will be undefined bcoz it is not taking input from any object



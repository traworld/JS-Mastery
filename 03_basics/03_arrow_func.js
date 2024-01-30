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
user.welcomemessage();  // we can directly run the function without moving it to console log

// we can change the valueinside the object 

// by printing only this method we get empty braces coz thir refers to something and if not is refered then it shows empty
// but in browser it ahows window out  put because of the engines 

// scope has 2 types block scope and global scope
// block scope means it is written inside the {}
// globsl scope means it is written outside the scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


// nested scope means scope inside an function 

// in a nested function the parent cannot access the variable ffrom child scope but the chilsd can access the variable from parent scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){      // here with a normal function we can declare the function prior 
    return num + 1
}



addTwo(5)
const addTwo = function(num){       // but here when we give it a variable then we cannot declare the function prior
    return num + 2
}



 
// new learnings
// scopes= global scope , block scope , lexical scope , strict scope , nested scope 

// globaql scope = a variable scope which you can access anywhere in the code base
// block scope are the scope which we can use only in the functions and it is declared using let an const not a var coz var can be modified

// here nested scope  are the scope where the parent function cant access the scope but the child scope can access the parent scope variable 

// hoisting in js means you can call the the function before and if its added in the variable using let or const then it cant. be called earlier as the variable should be initialized first  first before it is called 


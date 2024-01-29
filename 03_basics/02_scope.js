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





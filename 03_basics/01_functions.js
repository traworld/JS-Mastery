// function is like a collection of various code and and  this functions can be used at various place

function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

sayMyName // now just sayMyName is a reference of  a function now to execute we need to put parentheis

sayMyName()  // execution 

// function sayMyName() // () this where we pass parameter where we give definition to function
// while calling we call it as arguments


// in function if we return then after result nothing is read by js

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh")) 

// suppose we r making  a cart functionality and we want user information to add the items 

function cartItem(...userinfo) {
    return userinfo
    
}

console.log(cartItem(1 ,2 ,3 ,4));    // this return a value insid an array   // now we can convert the cartitem into an array and then we can add the item to show in our cart

// to make user input into an array we do rest operator it is same as spread but it depends in its usecase (...)


// how to use object inside a function    // always check typesafety

 const name = {
    fname: "sahil",
    rollNo: 39
 }

 function callname(something) {
    console.log(`my name is ${something.fname} my roll no is ${something.rollNo}`);
    
 }

 // to call a function no need to console log

 // callname(name)

 /// we can direcly pass the object while calling 

 callname({
    fname : "sam",             // in this method we dont refer to anothr object instead we just made a object while calling
    rollNo:39
 })


// 1st way to call an array

 const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));


// 2nd way

const myNewArray1 = [200, 400, 100, 600]

function returnSecondValue2(getArray2){
    console.log(getArray2[1]) 
}

returnSecondValue2(myNewArray1)

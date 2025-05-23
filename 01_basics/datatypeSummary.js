// primitive and non primitive

// in prmitive datatype we are given copy of the value from memory (stack memory)
// 7 types : string , number , boolean , symbol , null , undefined

const id = Symbol('233')
const secId = Symbol('233')

console.log(id == secId);  // false

// to use bigint put n after the big number js will understand its a bigint

//symbol make the value different even if we provide the same value 
// Symbols are mainly used when:

//     You want to create hidden object properties (not accidentally overwritten).
// const secretKey = Symbol("secret");

// const user = {
//   name: "Alice",
//   [secretKey]: "hiddenValue"
// };

// console.log(user[secretKey]); // "hiddenValue"
// console.log(Object.keys(user)); // ["name"] — secretKey is hidden




// in non primitive we have give the exact reference of the value (heap memory)
// types : array , object , function
// non primitive  datatype is function and function ka object function

// array is 
const greet = ["hi" , "hello"]

// object is 
let obj = { name :sam , 
    age: 12};

// function is written function(){ }
// and we can give variable to function also 
// we cannot give name to a variable as a function

let func = function(){}
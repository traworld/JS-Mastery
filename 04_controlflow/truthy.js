// in truthy it assumes that you have gien a true string 
// in truthy if no value then it assumes thatit is false


//eg1
const email = "sam@gmail.com"
if (email) {
    console.log(`got ur email`);               
} else {
    console.log(`didnt got the email`);
}

// here we arent checking any consition but it assumes that the value is true this is called switch statement

// eg2
const email2 = []
if (email2) {
    console.log(`got ur email`);              
} else {
    console.log(`didnt got the email`);
}

// in truthy empty array is assumed as true

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}    , empty 

if (email2.length == 0) {                     // we can check array.properties by using a method in conditions
    console.log(`o value array`);               
} else {
    console.log(`not a value array`);
}

// in object first we need to convert object into array and then check the properties
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// and , or are logical operators
// and && here it checks that all condition should be true
// or || here it checks that if one of them is true then it willl print


// Nullish Coalescing Operator (??): null undefined
// it is amjorly used when calling databse if we call a database and edont get a value so to not get affect we use nullish
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20      // here the one comes first willcome first // ?? this means null or undefined

console.log(val1);

// Terniary Operator
// we can directly use this to compare by using single question mark
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


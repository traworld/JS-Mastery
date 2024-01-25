let score = 3
console.log(score);
console.log(typeof score);

// in js we can change datatype by asssigning it with the desired datatype
// make sure the datatype name should start from Capital letters

let valueInnumber = Number(score)
console.log(valueInnumber);
console.log(typeof valueInnumber);


// what if we pass a string and give a number
let score2 = "3"
console.log(score2);
console.log(typeof score2);

let valueInnumber2 = Number(score2)
console.log(valueInnumber2);
console.log(typeof valueInnumber2);


let score3 = "3abc"   // we cannot put number and char in a string it will show NaN which is not a number
console.log(typeof score3);
let valueInnumber3 = Number(score3)
console.log(valueInnumber3);
console.log(typeof valueInnumber3);


let score4 = null
console.log(typeof score4);
let valueInnumber4 = Number(score4)  //here it automatically gives value 0 for null so keep in mind when using and it will take null as a object
console.log(valueInnumber4);
console.log(typeof valueInnumber4);

let score5 = undefined
console.log(typeof score5);
let valueInnumber5 = Number(score5) // here it shows NaN to undefined in output 
console.log(valueInnumber5);
console.log(typeof valueInnumber5);

// if we pass string then it will give output NaN

//empty string in boolean will give false and value if given then true
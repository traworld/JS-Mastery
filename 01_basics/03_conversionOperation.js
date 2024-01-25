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

// ******************************** Operations *******************************

let num = (2 + 3)
let num1 = (2 - 3)
let num2 = (2 * 3)
let num3 = (2 ** 3) //it means 2 to the power 3
let num4 = (2 / 3)
let num5 = (2 % 3) // it gives remainder



let num6 = ("2" + "3") //we can only add string not subtract
console.log(num6);
console.log(typeof num6);

let num7 = (2 + "3") // it gives 23 as a output
console.log(typeof num7);

let num8 = ("2" + 3) // it gives output as 23
console.log(typeof num8);

let num9 = ("2" + "3" + 3) // it gives output as 233
console.log(typeof num9);
console.log(num9);

let num10 = (2 + 3 + "5") // it gives output as 55
console.log(num10);
console.log(typeof num10);

let num11 = (2 +"2"+ 3) // it gives remainder 223
console.log(num11);

// in operation if the first char is in string then js will treat other char as string too 
// if the first char is number then it will treat other as a number 


// there are other operators too called prefix and postfix
// x++ ,  ++x
// // array can take any kind of data


// const arr1 = [ "bob", "the" , "builder"]
// const arr2 = ["hi" , "i" , "am" , "noddy"]

// // if we merge this 2 array the second aray or he array that we are pushing get as a single array
// // push method

// // to write method we dont have to give a virable to it we can directly give the method
// arr1.push(arr2)
// console.log(arr1);
// console.log(arr1[3][2]);

// // we can use concat method as well and the result is the same as push if we dont give ita virable if we give a variable then it will properly merge the array

// const array = arr1.concat(arr2)
// console.log(array);

// // there is another much optimal way called spread method

// // it also ive the same output as concat but we can add multiple arrays to it
// // concat and spread ar operators coz they add the arrays

// const array_spread = [...arr1, ...arr2]
// console.log(array_spread);


// // another array method is called flat method 
// //it spread out many arrays in to array 

const flat_array = [1,2,3,[4,5,[6,7,[8,9]]]] // if there are multiple arrays the into an arrya then flat  will return into a single array

const real = flat_array.flat(2) //the value under parenthesis defines depth of the array that means how many array you want to merge to  merge all give infinity

console.log(real);

// to convert anything into array we do array constructor  'Array.' and then method ()in log
// its a questionaire so its written in log

console.log(Array.isArray("SAHIL"));
console.log(Array.from("SAHIL"));

// to conert variable into array we give method "of"

let a = 100
let b =  "sahil"
let c = 39

console.log(Array.of(a,b,c));
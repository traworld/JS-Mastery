// every loop has the same thing that there are conditions and there are define thn there is increment and then the whole thing gets printed 
 
let myArr = ["hi","hello", "kaise ho"]
let arr = 1      /// initialize
while (arr < myArr.length) {
    console.log(`greetings:${myArr[arr]}`);    // here we print myArr ka index that is arr
    arr = arr + 1               // increment and decrement
}


// do while loop
// here first we print and icrement then we  check 

let score = 12
do {
    console.log(score);
    score++

} while (score <= 11 );


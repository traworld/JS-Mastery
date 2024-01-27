const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //the random value comes between o and very close to 1 but not actually 1  in decimals
console.log((Math.random()*10)+1 );  // here we multiply it b 10 so we can expand the range from 0 to 10 and by adding it by 1 we get a range of 1 to 10
console.log(Math.floor(Math.random()*10) + 1); // here it gives value from 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
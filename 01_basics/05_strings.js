const nameId = "traworld"
const diffNameId = ` great problem solver`

// to concatinate 1st way

console.log(nameId + diffNameId + "12"); 


// another way to define string is using backtick 
//another way to concatinate variables is using backtick and 

console.log(`sammy ${nameId} is a good coder ${diffNameId }. ` ); // here sapces matter inside backtick

// we can put variables in the concatination ${}

//another way to declare string is 

const game = new String ('sammy')
//new String is a key value pair
// to acces the the value in the given key we can write

console.log(game[1]);

// to check the prototype 
console.log(game.__proto__); // its an object
console.log(game.toUpperCase());

// to match a char or to check at what place the char at

console.log(game.charAt(2)); //to check where index it is
console.log(game.indexOf('m')); // index of the char

// to divide string use subString to divie=de but it doesnot allow -value
const name1 = game.substring(1,3)
console.log(name1);


// to use -value useslice to check from backward

const name2 = game.slice(-4, 2)
console.log(name2);

// to remove spaces from string e use a method called trim
const name3 = "   sammy  "
console.log(name3);
console.log(name3.trim());

//to replace a value from a string we use replace method

const url = "googledotcom"
console.log(url.replace('dot', "."));


// to check wether something is include in or not use includes

const url1 = "google1.com"
console.log(url1.includes('1'));


//to convert string to array based on anything we use a method split
// use seperator and limit

const url2 = "google dot-com"
console.log(url2.split(' ')); // e can split on the basis of 1 thing only at a time
console.log(url2.split(' ', '-')); // this will not work



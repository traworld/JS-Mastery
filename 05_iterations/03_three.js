// for of
// these are array specific rule
// in array we can store string and objects

// for (const iterator of object) {    // iterator means the variable name and object means kispe hame ye for loop lagana hai
    
// }
// ther no need of increment or decrement

// eg

 const newArr = [1,2,3,4]
 for (const arr of newArr) {
    console.log(`learning : ${arr}`);
 }


 // maps is a object that hold key value pair
 // map holds unique value that means if u repeat a key value pair thatt doesnot mean that it will repeat the pair
// the hold the order that they are written


// eg
const map = new Map()
map.set('in','india')
map.set('in','india')
map.set('in','india')

console.log(map);  // here it will only print it once as they are not the different pair


// how to give loop on map
// map is not iteratable so its not written in for in loop
// if we only want key then the whole key valu pair wil coe in array

for (const key of map) {
   console.log(key);          // here it will be an array of both key value pair
}
for (const [key,value] of map) {
   console.log(key,value);             //  to prin key and valur we need to give a syntax in a iteration ie []     
}


// for loop on object
// on object there are some other ways to iterate but this eg is not iteratable
const myObject = {
   game1: 'NFS',
   game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
   
// }


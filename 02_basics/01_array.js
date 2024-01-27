// js arrays are resizable

// in array when we do copy operation it gives 2 operations shallow copy and deep copy

// A shallow copy of an object is a copy whose properties share the same references 

// a deep copy of an object is acopy where properties donot share the same referance


// basics of arrays


 const arr = [1,2,3,4,5,6] //we can have string and numbers in the array as well


 console.log(arr);
 console.log(arr[3]);


 // array methods
 // push method to insert
 // pop use to remove the element 

 arr.push(8)
 console.log(arr);

arr.pop()   // pop doesnot need argument it will remove the last element form the array
console.log(arr);

// sift and unshift methods
 // in unshift is puts an element in the first of array and shift all the other array element and it is not good for the computer if its a huge array

 arr.unshift(2)
 console.log(arr);

 // now shit method does is it remove element form the first ara

 arr.shift()
 console.log(arr);


 //questionaire in array
 // includes to know if the elemen is there or not

 console.log(arr.includes(2));   //the response is in boolean

 //to find index
 console.log(arr.indexOf(2));


 // join method converts array into string

const myArr = arr.join()
 console.log(myArr);


 // slice and splice prototype

 // slice it only take the array that is between the range and the last range is not included in it
 // splice manipulates the whole array and remove the remaining elment that is not mentione in the method

console.log(arr.slice(1,4));

console.log(arr.splice(0,3));// here last range is included
console.log(arr);  // so splice manipulates the original array 
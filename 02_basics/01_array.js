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

// array methods
// what push do is it add an element to the end

//eg
// const trial = [1,3,4,5,6]
// trial.push("2")
// console.log(trial);
// console.log(typeof trial);

// here if we put anything in "" it will treat it as a string 
// and if we dont put the "" then it will cound as an number

// what will pop do 
// it will remove the last element from the array

// eg
// const triall = [1,2,3,4,5]
// triall.pop(2)
// console.log(triall);

// the .pop() method removes the last element of the array, regardless of any argument passed.

// it will reomve the last element from the array ie:5

// lest learn shift() method in arrays

// here in shft it removes the first element in array and if we return that same array then it will show the removed element array
// eg 

// const arr = [1,2,3,4]
// const newArr = arr.shift()
// console.log(arr)
// console.log(newArr)

//arr.shift() removes the first element (1) from the array.
// arr becomes [2, 3, 4].
// The removed value (1) is stored in newArr.
// it is used in first in first out method

// lets learn unshift() method 
// if we use unshift method it adds element form the front andyou can as much element u want it will add in the front 
// and if we return the variable then it will give the lengthof the updated array

const leng = [2,3,4,5]
const newLeng = leng.unshift(1,0)

console.log(newLeng);
console.log(leng);



// lets learn includes here we check if the argument that we have written is present in the array 
// here we can also do a thing where we can ask a second argument in the include method where it will act as a start button and it will start for mthere 
// Yes, the search starts at the startIndex, including that index in the search.

// It does not skip the value at the startIndex; it checks that element and continues forward from there.

// const newLeng = leng.includes(1,0)

// another method called slice(start , end) 
// here we give the start and end argument and that start element is also considered but the it leaves the last one liek if its 4 then it will take till index 3

// eg
// const sli = [2,3,4,5,6]
// const newSli = sli.slice(2,4)

// ans 4,5

// lets learn splice

// splice is use to remove or add elements on the array 
// there are 3 arguments we can pass be it starting point , second thind is :delete count and the third argumnet is what you want to add 

// syntax .splice(starting point, deleting count (how many element you want to del if three is give then the starting index from 3 will also be removed) and then the element you want to add , 1,2,3)

// eg

const Spl = [1,2,3,4,5,6]
const newSpl = Spl.splice(1,3,'a','b','c','d')

console.log(newSpl);

// in splice the return of the varuable will be the removed element
// here it will be 2,3,4

// lets learn join(seperator)
// here it joins the array and make it to a single string and if you dont put any seperator then it will treat it as a , and if you add and thing like , . - then it will place it between each array

// here there is a reverce array where it will reverce the exact array







// dates are measured in milliseconds 

 const date = new Date() //new Date() is a object
 console.log(date);// we get a standard date we can convert that to a much readable data

console.log(date.toDateString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString());
console.log(date.toISOString()); 


// to set a particular date we can write
const newdate = new Date(2023,2,22)
console.log(newdate.toDateString());
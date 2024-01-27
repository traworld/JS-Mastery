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

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
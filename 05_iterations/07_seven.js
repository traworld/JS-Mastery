// map is a callback function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map function
// const num = myNumbers.map( (val) => val > 3  )
// console.log(num);                                 // here it will give a boolean output
const num = myNumbers.map( (val) => val + 3  )
console.log(num);                                 


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
                                                           // idhar line by line code render hoga 
console.log(newNums);


// chaining means when we use 2 3 methods together
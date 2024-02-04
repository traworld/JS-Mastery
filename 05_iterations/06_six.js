//in for each we cant return a the variable of the function 
// so to overcome that we use filtr callback function
// here it stores the value inside the variable

//eg
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);


// when u start a scope you ned to return it without fail

const my = [1,3,4,5,6,6,7,8,9]
const numb = my.filter( (yo) =>  {              // after arrow we need to give condition so that it will wrk according to it
   
    return  yo > 4
} )
console.log(numb);

// we can use this in for each as well but we ned to add logic inti


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums);

// eg
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const myBooks = books.filter( (bks) => bks.genre === 'Non-Fiction' )
console.log(myBooks);


// books.filter( function (bks) {        // with filter we need to put a varaible  in whichit will be stored but in for each we can directly call it
    
// } )


// for each is most used
// callback function doesnot have name and we need to give callback function to execue dsoe task
//some loops are directly inserter in an array called for each
// parameter of loop

const coding = ["hi", "hello","world"]
// to call this wre need t write a callback function

//coding.forEach(  )      // undefined is not a function 
// inthe parenthesis we have to give a function to perform 

coding.forEach( 
    function ( val ) {              // here we dont have to give name to the function coz its a call back function
       console.log(val);                            // here in the prenthesis we just have to give elents inside a array a name any name it will autoatically loop all 

    }
 )

 coding.forEach( 
    (item) => {
        console.log(item);
    }
  )


  // or we can do ione thing that we can state a function early and then print i by giving it a reference

//eg
function greet(yo) {          // here we need to give the name so that we can ref it  later
    console.log(yo);
    
}

coding.forEach(greet)

// now inside the param it doesno only have the name it comes with  lot of other fucntions as well

//// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

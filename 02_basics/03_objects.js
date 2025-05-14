// to define objects there are 2 ways 1st is object literal , 2nd is constructor

// another is singleton : if we use constructor then it becomes a singleton and when literal then not a singleton

// to make a cinstructor object we write = 
Object.create

// and the litral one is 
const user = {}

// in ovbject we   can define key andf value
const user1 = {
   name: "sahil" ,
   email : "hi@gmail.com" ,
   DOB: "16-04-2002",
   "fullName": "sahil singh"                     // this is vlaue and keys   // by default js take key ie name as string
    }

 // there are 2 way to access string
 // one is log and the key you want to access ie user.email called dot notation
 // other way is by giving key as an array 

 // there is no chance that we can access fullname by a method so we can write is by using square notation


 // to write symbol first we need to define it 
 // and then we can use it in the object by giving it a squre braces

const sym = Symbol("sam")
const sym1 = Symbol("sam")

const lit = {
    fname: "sahil",
    [sym]: "mykey1" , 
     [sym1]: "sammmy"                  // th symbol creates a  new symbol each time even if the string that is used to define in same of 2 string
} 

console.log(lit[sym]);

// to chsnge content we can just simply use.and then key = changed value

lit.fname= "sam"

// to freeze an object we can do object,freeze(name of object to freeze)
Object.freeze(lit)
lit.fname= "Rahul"
console.log(lit);


// we can add function iside an objects
// function can be treated as a normal variable

// so to add function inside an object
// we use "this" property to know what elements are there in side a object

lit.greeting = function(){
   console.log("Hello Js user");
}
console.log(lit.greeting());

lit.greeting_two = function() {
   console.log(`hello user ${this.fname} this is your DOB`);
   
}
console.log(lit.greeting_two());



// new learning 
// here if we take object

const try1 = {
   name: "sahil",
   age : 12,
   greet: function () {
      console.log(`hi ${this.name}`);
      
   }
}

// to take any keys from object we use this. property
// and properties is called name and age 
// and greet is called method 

// we can also delete properties by using delete syntax 

delete try1.age;

// we can check if this property is there or no in the object

try1.hasOwnProperty("age")

//we can also check what all properties does user. have and it gives an array or elements
Object.keys(try1);// here it gives an array of keys
Object.values(try1); // here it gives an array of values
Object.entries(try1); // here it gives an array of entries


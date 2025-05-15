// how to declare a object in singleton 
// ther is no diffrence between singleton and normal objects
// we write const to declare a variable so if we are changging a variable by adding a method then no need to giving a variable


const user = new Object()
                                // they borth are object and they have same output
// const user1 = {}

// to add value inside an object

user.name = "sammy"
user.class = "3rd"
// console.log(user);

// we can add many object inside an object
// and to acces that in log we just need to add (.)notation

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sahil",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// Object.assign( ) is a static method that copies properties from one or more target on=bject and return it to th modified target object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2?, obj4)   // we give ? sign so if the data doesnot come than it will not give an array     

// {} herre empty braces are preferred to write so that it copies all the data and paste it to a single braces // its okay if not written

// another way to combine objects in one we use spread operator as array

const obj3 = {...obj1, ...obj2}
console.log(obj3);


// when the values come from database we use this as the data comes in array
 const users = [
    {
name2: "sahil",
space: 23
    },
    {
1: "hoi"
    }
 ]
const access = users[0].name2  // we can do this or we can write directly inside a log

console.log(access);


// we can convert object keys into an array and we can loop into this
// syntax will be

console.log(Object.keys(users));  // this converts into an array
console.log(Object.values(users));  // this converts into an array
console.log(Object.entries(users));  // this converts into an array of both key and value into an one array
console.log(Object.hasOwnProperty("name"));  // to check if thepropoerthy is thre or not inside an object


// new learning 
// now we can combine all the other objects into 1
// there are 2 ways 1st be assign method and the other be the spread operator

// assign

const obj5 = {1: "a", 2: "b"};
const obj6 = {3: "a", 4: "b"};
const obj7 = {5: "a", 6: "b"};

const obj8 = Object.assign({},obj5,obj6)

// another way is spread operator 

const obj9 = {...obj7, ...obj6}

// next is to handle the array of objects

const arrObj = [
    {
        name:'sahil',
    },
    {
        age: 12
    }
]
// now if i want to access it i can write

console.log(arrObj[0].name);




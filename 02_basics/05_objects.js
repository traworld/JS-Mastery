// destructure of objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// and if we want to use a key in someother pplace we can do simply

// course.courseInstructor  // one way
// const {what to extract} = (kaha se extract karna hai ) 

//we cnas change the syntax for a thing to extract and change the name by:

const {courseInstructor:ins} = (course)
console.log(ins);

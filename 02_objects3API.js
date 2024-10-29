const course={
    courseName:"Js in hindi",
    price:999,
    courseInstructor:"Hitesh sir"
}

//course.courseInstructor // This is a hectic process. When we want to reuse this in many places it becaomes weird to use this long word so  we have abnother method to do this 

const {courseInstructor}=course // we are assigning that the courseInstructor is of course object only so we can directly access it
console.log(courseInstructor) /// This works perfectly

//Also you can change the variabke to make its short form
 
const {courseInstructor: instructor}=course// Valid
console.log(instructor)


//API....(like menu of foood)
//JSON
{
    "name":"Ayam",
    "faculty":"BEI"
}

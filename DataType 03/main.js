// there are 8 data types 
// - Number 
// - String 
// - Boolean 
// - Null 
// - Undefined
// - BigInt
// - Symbols 
// - Object 
// ------------------------------------------- 
const grade = 100; 
console.log(typeof grade); // print number 

const greeting = 'Hello, how are you'
console.log(typeof greeting); // print greeting

const hasGradudate = true; 
console.log(typeof hasGradudate); // print hashGraduate

console.log(greeting.includes('Hello')); // return true, because Hello is there
console.log(greeting.includes('Hi')); // return false, because there is no Hi 

const longnumbers = 1234567890123456789012345n;
console.log(typeof longnumbers); // print number bigint
console.log(BigInt(longnumbers)); // print full numbers

const value = 65 / 0;
console.log(value); // this must be wrong
const result = 'hello' / 10;
console.log(result); // NaN

const student = {
    name: 'saboor', 
    color: 'white', 
    age: 30, 
    course: 'English', 
    year: 2023, 
    month: 'July'
};
console.log(typeof student); // data type 
console.log(student.name); //  Accessing 'name' property using dot notation
console.log(student['age']); // Accessing 'age' property using bracket notation
// modify new properties 
color = student.color= 'blue';
age = student['age'] = 10;
console.table(['Age', color, 'Age', age]);
console.warn(color, age);

console.log(delete student.month); // delete month from object list
console.log(student); // display all objects

for(var key in student){
    console.log(key + ": " +student[key]);
}

console.log('name' in student); // check if 'name' propety exits; true
console.log(student.hasOwnProperty('1')); // Check if 'course' property exists

const id = Symbol('id');
console.log(id);
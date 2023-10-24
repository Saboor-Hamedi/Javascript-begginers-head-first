/*
* The types can be divided into two groups: 
* primitive types and reference types. Numbers, boolean values,
* and the null and undefined types are 
* primitive. Objects, arrays, and functions are reference types
*/
// todo: A primitive type has a fixed size in memory

var a = 3.3; // ! Declare initilize a variable 
var b = a; 
a = 4; 
console.log(b);
// lets make array 

var arr = [1,2,3,4,5];
var bb = arr;
arr[0] = 9;
console.log(bb);
// 
let object1 = {
    name: 'object1',
    lastname:'object2'
};
let object2 = object1;
object1.name = 'Hello World!';
console.log(object2);
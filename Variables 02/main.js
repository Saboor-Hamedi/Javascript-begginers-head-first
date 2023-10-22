// Variables
/*  A variable is a “named storage” for data. 
 *  We can use variables to store goodies, visitors,
 *  and other data.
 * var
 * let 
 * const
*/

let message;
message = 'Hello, I am variable';
console.log(message);

// change certain words 
let name = 'Saboor';
console.log('I would soon replaced by ' + name);
const number = 1; // unchagable 
// console.log(number = 2); Assignment to constant variable

let x = 2;
let y = 3;
let result = eval('x + y'); // The eval() function in JavaScript can be used to evaluate mathematical expressions written as strings.
console.log(result);

let expression = '5+2+6-3*4';
let result1 = eval(expression);
console.log(result1);
// var instead of let
// In older scripts, you may also find another keyword: var instead of let:
var hello = 'Hey I am a var';
console.log(hello);
// uppercase constant 
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';

let color = COLOR_ORANGE;
console.log(color);
// time to load page

// Re-assigning variable 
let age = 30;
console.log(age)
// re-assign it again
age = 40;
console.log(age);

// declare 
let score;
score = 10;
console.log(score);
if (true) {
    score = score - 1
}
console.log(score);
// we cannot do this with const 

while(score > 0){
    score = score -1;
}
console.log('You lost');
// const

const xx = 100;
console.log(xx);
const arr = [1,2,3,4]
arr.push(5);
console.log(arr);
// same goes with object 
const people = {
    name: 'saboor', 
    lastname: 'hamedi'
};
console.log(people);
// or you can like this 

people.name = 'Hello';
people.email = 'x@gmail.com';
console.log(people);

//multiple variable 
let var1, var2,var3;

var1 = 10;
console.log(var1);
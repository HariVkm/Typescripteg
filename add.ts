import { log } from "console";
var prompt = require('prompt-sync')();
var a = Number(prompt('Enter the first number:-'));
var b = Number(prompt('Enter the second number:-')); 
var c = Number(prompt('Enter the third number:-')); 
function addNumbers(a:number, b:number, c:number) { 
   return (a + b + c); 
} 
var sum: number = addNumbers(a, b, c) 
alert('Sum of three numbers is: ' + sum );
export{};



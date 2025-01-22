import { log } from "console";
var prompt = require('prompt-sync')();
var a = Number(prompt('Enter the Range:-'));
var i:number; 
var factorial = 1; 
for(i = a;i>=1;i--) {
   factorial *= i;
}
console.log(factorial)
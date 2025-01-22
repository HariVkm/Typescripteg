"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
console.log('------------------------');
var a = Number(prompt('Enter the Range of the Array:-'));
// const myArray = new Array(a).fill(null).map((_, i) => i+1 );
var myArray = Array.from({ length: a }, function (element, index) { return index; });
console.log('My Array is');
console.log(myArray);
var num = Number(prompt("Enter the number to push:-"));
var isExist = myArray.indexOf(num) !== -1;
if (isExist) {
    console.log("Element exists in array,Please Add new Element or Push Same");
    var num1 = Number(prompt("Enter the Another number to push:-"));
    myArray.push(num1);
    console.log('My New Array is');
    console.log(myArray);
    var ele = Number(prompt("Enter the  Element to Splice:-"));
    var index = myArray.indexOf(ele);
    if (index >= 0) {
        myArray.splice(index, 1);
    }
    console.log('My New Array After Deleting');
    console.log(myArray);
    console.log('------------------------');
}
else {
    myArray.push(num);
    console.log('My New Array is');
    console.log(myArray);
    var ele = Number(prompt("Enter the  Element to Splice:-"));
    var index = myArray.indexOf(ele);
    if (index >= 0) {
        myArray.splice(index, 1);
    }
    console.log('My New Array After Deleting');
    console.log(myArray);
    console.log('------------------------');
}

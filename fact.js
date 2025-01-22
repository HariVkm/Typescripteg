"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var a = Number(prompt('Enter the Range:-'));
var i;
var factorial = 1;
for (i = a; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);

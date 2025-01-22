"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var prompt = require('prompt-sync')();
var a = Number(prompt('Enter the first number:-'));
var b = Number(prompt('Enter the second number:-'));
var c = Number(prompt('Enter the second number:-'));
function addNumbers(a, b, c) {
    return (a + b + c);
}
var sum = addNumbers(a, b, c);
(0, console_1.log)('Sum of three numbers is: ' + sum);

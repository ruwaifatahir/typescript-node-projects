"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number:\n");
    var operator = (0, readline_sync_1.question)("Enter the operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter the second number:\n");
    var validInput = isValidInput(firstStr, operator, secondStr);
    if (validInput) {
        var _a = [Number(firstStr), Number(secondStr)], first = _a[0], second = _a[1];
        var result = calculate(first, operator, second);
        console.log("".concat(result, " \n"));
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
function calculate(first, operator, second) {
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return first / second;
    }
}
function isValidInput(first, operator, second) {
    return isNum(first) && isNum(second) && isOperator(operator);
}
function isOperator(operator) {
    return ["+", "-", "*", "/"].indexOf(operator) !== -1;
}
function isNum(str) {
    return !isNaN(Number(str));
}
main();

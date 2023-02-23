"use strict";
//  * CUSTOM functions
// const userNum1: number = +prompt ("Введи свое число");
// const userNum2: number = +prompt ("Введи свое число");
// const numberFromServer1: number =  13;
// const numberFromServer2: number =  13;
// const userLera: number = 40;
// const userVadik: number =47;
// sum(userNum1,userNum2);
// sum(userLera, numberFromServer1);
// sum (500, userVadik);
// function sum (num1:number , num2:number){
//     console.log (num1 + num2);
//     alert(num1 + num2);
// }
//  * Calculator
let isRunning = true;
while (isRunning) {
    const number1 = +prompt("Введи число : ");
    const number2 = +prompt("Введи число : ");
    validate(number1, number2);
    if (number1 === 23)
        break;
}
function validate(x, y) {
    if (!isNaN(x) && !isNaN(y)) {
        console.log("Valid");
        const symbol = prompt(" 1)Sub 2)Add 3)Div 4)Mult");
        calculate(x, y, symbol);
    }
    else {
        console.log("Invalid");
        isRunning = confirm("Хочешь выйти?");
    }
}
function calculate(a, b, symbol) {
    switch (symbol) {
        case "1":
            console.log(a - b);
            break;
        case "2":
            console.log(a + b);
            break;
        case "3":
            console.log(a * b);
            break;
        case "4":
            console.log(a / b);
            break;
        default:
            console.log("Error...");
            break;
    }
}

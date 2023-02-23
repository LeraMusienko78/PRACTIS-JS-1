"use strict";

// Global variables
// const userName = prompt("What is ur name ");

// const result = greeting(userName);
// console.log(result);

// console.log(expression); ?????
// greeting("Cat");
// greeting("Biden");

// Function declaration

// Local variables
// function greeting(un) {
// Functions body

//   Local variable
//   const expression = `Hello ${un}`;
//   alert(expression);

//   if (expression === "Hello Kir")
// return (function () {
//   return expression + "!!";
// })();

//   return expression;
// }


// users = []
// push() method to push data into array

// 1) Registration y/n
// 2) user = {
//  name , age , role
// }
// 3) age => num
// 4) name => str

// 5) Return date when user was born
// 6) Return amount of letter in the name
// 7) Return name in upperCase , lowerCase , slice median of name (here must be 3 letter). Ex : Kirill => iri

// let isRunning = true ;

// while(isRunning){

//     alert("Hello user !");

//     const registration = confirm ("Ты хочешь зарегистрироваться?");

//     if (registration === true){
//         alert("Ведите свои данные :");

//         const nameUser = prompt ("Твое имя ?");
//         const ageUser = prompt ("Твой возраст ?");
//         const roleUser = prompt ("Ты админ ? admin/user ");

//         if(roleUser === "admin"){
//             alert("Admin");
//             console.log("Admin", getYearOfBirth(ageUser));
//         }else if (roleUser === "user"){
//             alert ("User");
//             console.log("User", getYearOfBirth(ageUser));
//         }else{
//             alert(errorMessage("Введите корректные данные..."));
//             console.log (errorMessage("Введите корректные данные..."));
//         }

//         const newUser = createNewUser (nameUser, ageUser, roleUser);

//         console.log(getLengthNameUser(nameUser));
//         // console.log(getLowerCaseName(newUser));
//         // console.log(getUpperCase(nameUser));
       

//         // console.log(newUser);
//         // alert(newUser);

//     }else{
//         alert("До встречи !");
//     } 
//     isRunning = !isExit(confirm ("Желаете выйти?"));
// }

// function isExit (choose){
//     return choose;
// }

// function createNewUser(name , age , role){

//     return{
//        nameUser: name,
//        ageUser: age,
//        roleUser: role, 
//     }
// }

// function errorMessage (message){
//     alert (`ERROR : ${message}`);
// }

// function getYearOfBirth(age){
//    return 2023-age;
// }

// function getLengthNameUser(name){
//     return name.length;
// }

// let isRunning = true ;

// while(isRunning){

//     const talkWithUser = prompt (" a), b), c)");
 
//     switch(talkWithUser){
//     case "a":
//         abcOne();
//         break;

//     case "b":
//         abcTwo();
//         break;

//     case "c":
//         abcThree;
//         break;

//      default:
//         console.error("Error");
//         errorMessage("Error...");
//         break;
// }
//   isRunning = !isExit(confirm ("Exit?"));
// }
// function isExit(choose){
//     return choose;
// }
// function errorMessage(message){
//     alert(message);
// }
// function abcOne (){
//     alert("a");
// }
// function abcTwo(){
//     alert("b");
// }
// function abcThree(){
//     alert("c");
// }

// CALCULATE

let isRunning2 = true;

while(isRunning2){

    const userNumber1 = +prompt ("Назовите первое число:");
    const userNumber2 = +prompt ("Назовите второе число:");
    const userSymbol = prompt ("Введите знак");

    calculete(userNumber1, userNumber2, userSymbol);
    
    

    validate(userNumber1, userNumber2, userNumber2, userSymbol);

   
    
}

function isExit (choose){
    return choose;
}

function add(a, b){
    return a + b;
}

function subtr(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function validate (a,b){
    if(!isNaN(a) && !isNaN(b)){
        console.log("Valide");
        alert("Продолжайте")
    }
    else{
        console.log("Invalide !");
        alert ("Введите корректные данные !");
    }
}

function calculete(number1, number2 , symbol){

    validate(number1, number2);

    let result;

    switch (symbol){
        case "+":
            result = add(number1,number2);
            alert(result);
            console.log(result);
            break;

        case "-":
            result = subtr(number1,number2);
            alert(result);
            break; 

        case "*":
            result = multiply(number1,number2);
            alert(result);
            console.log(result);
            break; 
                
        case "/":
            result = div(number1,number2);
            alert(result);
            console.log(result);
            break; 
            
        default:
            console.error("Error");
            errorMessage("Error...");
            break;

    }

}























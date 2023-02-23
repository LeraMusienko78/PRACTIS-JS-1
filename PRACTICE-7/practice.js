"use strict";

// run(isRunning);

// function run (isRunning){
//     if(!isRunning) return console.error("Something went wrong !");

//     console.log ("2+2=4");

//     console.log ("Code is running correctly !");
// }



// 1. Greeting (with alert)
// 2. What do you want to do : 1)Register 2)Auth 3) Show all users 4) Quit
// 3. Show all users => print users to the console

let isRunning = true;

const users = [
    {
        email : "Joe@45",
        password : "454545",
        firstName : "Joe",
        surname : "Biden",
        age : 45
    },
    {
        email : "Jonn@25",
        password : "252525",
        firstName : "Jonn",
        surname : "Doe",
        age : 25
    },
    {
        email : "Mike@15",
        password : "151515",
        firstName : "Mike ",
        surname : "Bubby",
        age : 15
    },
]
const admins = [
    {
        email : "Ivan@55",
        password : "555555",
        firstName : "Ivan",
        surname : "Ivanov",
        age : 55
    },
    {
        email : "Petia@65",
        password : "656565",
        firstName : "Petia",
        surname : "Petrov",
        age : 65
    },
    
]
while(isRunning){
    alert("Hello user ")

    const userChoose = prompt (
        " What do you want to do : 1)Register 2)Auth 3) Show all users 4) Quit"
        );

    switch(userChoose){
        case '1':
         const em = prompt ("Email ?");
         const pas = prompt("Passvord ?");
         const fn = prompt("Как тебя зовут ?");
         const sur = prompt("Как твоя фамилия ?");
         const age = prompt("Сколько тебе лет ?");

         const newUser = createNewUser (em, pas, fn, sur, age );

         if (prompt ("Is admin y/n") === "y"){
            admins.push (newUser);
         }else{
            users.push(newUser);
         }
        //  console.log (`[NEW USER]` , newUser);
            break;

        case "2":
            const userRole = prompt ("Ты админ ? y/n");

            const userEmail = prompt ("Введите email :");
            const userPassword = ("Пароль ?")

            if(userRole === "y"){
                auth (userEmail, userPassword, admins);
            }
            else{
                auth (userEmail, userPassword, users);
            }
            break;

        case '3':
            const role = prompt ("Do you want to look at a) admins or b) users ? ");

            switch (role){

                case "a":
                    printUsersToTheConsole(admins);
                    break;
                case "b":
                    printUsersToTheConsole(users);
                    break;
        
                default:
                    errorMessage("We have only to picks : admins and users");
                    break;
            } 
            break;

        case '4':
            isRunning = false;
            break;

        default:
            errorMessage("Incorrect data try again later! ");
            break;
    }

    isRunning = isExit(confirm("Do you wanna do somthing else here? "));

}

function validation (person, email, password){

    if (email === person.email){
        console.log("Here you are" , person.firstName);

        if (password === person.password){
            console.table(person);
            console.log ("HERE WE ARE");
        }
    }
}

function auth (email, password, list){
   for(const person of list){
    // console.log ("[PERSON]", person);
    validation(person, email, password);
   }
}

function printUsersToTheConsole (users){
    console.table(users);
}

function errorMessage (message){
    alert (`ERROR : ${message}`);
}

function isExit (choose){
    return choose;
}

function createNewUser(em, pas , fn , sur , age){

    return {
        email : em,
        password : pas,
        firstName : fn ,
        surname : sur,
        age : age,
    };
}












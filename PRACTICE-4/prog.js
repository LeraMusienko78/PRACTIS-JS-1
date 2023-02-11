"use strict";
alert("Hello");
let switcher = true;
while (switcher) {
    const name = prompt("Name?");
    if (name.length > 2) {
        const surname = prompt("Surname ? ");
        const age = +prompt(" Age ?");
        let status;
        if (age > 0 && age <= 13) {
            status = "babby";
        }
        else if (age > 13 && age <= 18) {
            status = "teenager";
        }
        else {
            status = "adult ";
        }
        switch (status) {
            case "babby":
                console.log("Тебе сюда рано");
                switcher = false;
                break;
            case "teenager":
                console.log("Позови папу или маму");
                break;
            case "adult ":
                console.log("Ок, регистрируйся");
                const email = prompt("Enter email");
                if (email.includes("@")) {
                    const password = prompt("Enter password");
                    if (password.length > 4) {
                        console.log("It was register yes !!! ");
                        alert("Вы успешно зарегались");
                    }
                    else {
                        console.log("Error password...");
                        alert("Error password...");
                    }
                }
                else {
                    console.log("Sorry , error...");
                    alert("Sorry , error...");
                }
                break;
            default:
                break;
        }
    }
    console.log(" Введите правильно имя");
    alert(" Введите правильно имя");
}

'use strict';

// const user1 ={
//     name : "Den",
//     surname: "Row",
//     gender: "masculine"
// }
// alert(user1);

// const user2 = {
//     name : "Olga",
//     surname : "Poliakova",
//     gender: "feminine"
// }
// alert(user2);
// console.log ( user1, user2);


// *Game

const start = confirm(" Поиграем?");

if(start === true){
    alert (" Ура , начнем!");
}
else{
    alert("Ну ладно, в следующий раз...")
}

const playerName = prompt ("Как тебя зовут?");
alert(playerName);

const question = confirm (`${playerName} , ты любишь математику ?`);
if (question === true){
    alert("Ok!")

    const sum = prompt ("Итак , разминка. Сколько будет 2 + 2 ?");


    if (sum === "4"){
        alert (" Какой молодец, правильно!")
    }
    else{
        alert(" Подумай еще!")
    }

    const ded = prompt ("Второй вопрос! 100-24?");

    if (ded ==="76"){
        alert ("Super")
    }
    else{
        alert(" Подумай еще!")
    }

} 
else{
    alert ("Тогда просто поболтаем ");

    const weather = confirm (`${playerName} , ты любишь петь? `)

    if (weather === true){
        alert (" Супер , я тоже!");
    }
    else{
        alert("Ну тогда пока... у меня нет настроения (((");

    }
}
 






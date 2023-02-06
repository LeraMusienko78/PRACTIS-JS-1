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

    let sum = prompt ("Итак , разминка. Сколько будет 2 + 2 ?");


    if (sum === "4" || sum === 4){
        alert (" Какой молодец, правильно!");
    }
    else if  (sum  !== 4 || sum != isNaN(sum)){
        let newSum = prompt ("Попробуй еще  " , " 2 + 2  " )

        if (newSum !==4 || newSum !=="4"){

            while( newSum === false || newSum === null || newSum === isNaN(newSum)){
                newSum = prompt("Опять неправильно" , " 2+2 ?")
            }

            if (newSum === 4 || newSum === "4"){
                alert (" good shit!");
            }
        }
        
    }else{
        alert("error");
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
 






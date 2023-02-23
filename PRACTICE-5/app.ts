// * NUMBER :

const num: number = 23;

let res : number = num + 23;
res = num * 3;
res = (num*2)*2;
console.log(res);

// * STRING :

const str: string = ("Hello world");
console.log (str + " !!!");

// * BOOLEAN

//  ! Type Alias

// type names = string | null; 

// const firstName : names = "Jonn";

// type id = "id32224444" | "id32224443";

// const studentId: id = "id32224444";
// const adminId: id= "id32224443";
// const lectorId = "id32224442";

// const number1: number = 23;
// const number2: number = 13;

// const eqation: string = `23 + 13 = ${number1 + number2}`;

// console.log(eqation);


// * WeekDay

// 1) Get day of week
// 2) if sunday : Today is beautiful day;
// 3) ...

type WeekDay = 
|"sunday" 
| "monday" 
| "tuesday" 
| "wednesday" 
| "thursday" 
| "friday" 
| "saturday";

let switcher = true ; 

while (switcher){

    const dayOfWeek:WeekDay = prompt ("Какой сегодня день недели ");

    switch(dayOfWeek.toLowerCase()){
        case "sunday":
            console.log("if sunday : Today is beautiful day");
            switcher = !confirm(" Хочешь выйти? ") ;
            break;
    
        case "monday":
            console.log("if sunday : Today is awful day");
            break;

        case "q":
            switcher = false;
            break;    
    
        default:
            console.log("Error...")
            break;    
    
    }
    
}







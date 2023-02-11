const app = document.querySelector("#app");
const live = document.querySelector("#live");



console.log ("Here we are ")

const group = ["Polina" , "Vika" , "Lesha"];
console.log (group);
console.log(group.length);
let i = 0;

while(group.length > i){
    app?.innerHTML += `
       <h1>${group [i]}</h1>
    `;
    i++;
}

const group2 = [ "Инстаграмм", "Тик-ток", "Мультики"];
console.log(group2);

for (let j = 0 ; j < group2.length ; j++){ 

    live?.innerHTML += `
    <h1>${group2[j]}</h1>
    `;
}

for (let i = 0 ; i < 10 ; i++){

    if(i%2 === 0){
        const red = document.createElement("div");
        red.style.background = "red";
        red.style.width = "150px";
        red.style.height = "150px";

        app?.append(red);
    }else{
        const blue = document.createElement("div");
        blue.style.background = "blue";
        blue.style.width = "150px";
        blue.style.height = "150px";
        app?.append(blue);
    }

}





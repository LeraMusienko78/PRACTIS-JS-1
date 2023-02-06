'use strict';

// const firstName = prompt ("Как твое имя?");

// const output = document.querySelector(".output");

// // console.log(output);

// output.innerHTML = `
// <h2>${firstName}</h2>
// `;

const announcement = prompt ("ВНИМАНИЕ! ВНИМАНИЕ! ВСЕМ СРОЧНО ЧИТАТЬ!!!");

const output = document.querySelector(".output");

console.log(output);

output.innerHTML = `<h1>${announcement}</h1>`;

const input = document.querySelector(".input");

console.log (input);

input.innerHTML = `<h2>${announcement}</h2>`;


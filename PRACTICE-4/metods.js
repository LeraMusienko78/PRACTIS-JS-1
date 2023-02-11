"use strict";
//  string.includes
// * Length:
const simplString = "Hello World";
console.log(simplString.length);
const strLen = simplString.length;
// * Slice:
for (let i = 0; i < strLen; i++) {
    console.log(simplString[i]);
}
console.log(simplString.slice(0, 5));
const hello = simplString.slice(0, 5);
console.log(hello.slice(-2));
console.log(simplString.slice(3, 8));
// * Trim:
const password = "  Hello0102 ";
console.log(password);
const trimPassword = password.trim();
console.log(trimPassword);
// * toLowerCase , toUpperrCase  
const firstSurname = "muSSiEnko";
const lowerFirstSurname = firstSurname.toLowerCase();
console.log(lowerFirstSurname);
const upperFirstSurname = firstSurname.toUpperCase();
console.log(upperFirstSurname);
// * CharAt
const password1 = "hello232323";
console.log(password1.charAt(7));
// * Substring
const str = "Mozilla";
console.log(str.substring(0, 4));
// * Replace
const greeting = "Hello Mike, Mike";
console.log(greeting);
const greetingToJon = greeting.replace("Mike", "Lera");
console.log(greetingToJon);
// * ReplaceAll
const question = " tree, tree ?";
console.log(question);
const questionToBush = question.replaceAll("tree", "bush");
console.log(questionToBush);
// * indexOff/lastIndexOff
const lera = "Lera";
const x = lera.indexOf("r");
console.log(x);

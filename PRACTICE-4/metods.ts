//  string.includes

// * Length:

const simplString :string = "Hello World";
console.log(simplString.length);

const strLen = simplString.length;

// * Slice:

for(let i = 0 ; i< strLen ; i++){
    console.log(simplString[i]);
}

console.log (simplString.slice(0,5));

const hello:string = simplString.slice(0,5);

console.log(hello.slice(-2));
console.log (simplString.slice(3,8));

// * Trim:

const password :string= "  Hello0102 ";
console.log (password);

const trimPassword :string= password.trim();
console.log(trimPassword);

// * toLowerCase , toUpperrCase  

const firstSurname :string= "muSSiEnko";

const lowerFirstSurname:string = firstSurname.toLowerCase();
console.log(lowerFirstSurname);

const upperFirstSurname :string= firstSurname.toUpperCase();
console.log(upperFirstSurname);

// * CharAt

const password1:string = "hello232323" ;
console.log (password1.charAt(7));

// * Substring

const str:string = "Mozilla";
console.log(str.substring(0,4));

// * Replace

const greeting :string= "Hello Mike, Mike";
console.log (greeting);

const greetingToJon:string = greeting.replace("Mike","Lera");
console.log (greetingToJon);

// * ReplaceAll

const question:string = " tree, tree ?" ;
console.log(question);

const questionToBush:string = question.replaceAll("tree","bush");
console.log (questionToBush);

// * indexOff/lastIndexOff

const lera :string= "Lera";
const x = lera.indexOf("r");
console.log (x);







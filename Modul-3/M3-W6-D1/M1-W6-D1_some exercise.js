let myIntegerVar = 10;
let myStringVar = "10";
let myBooleanVar = true;
let myNullVar = null;
let myUndefinedVar = undefined;
console.log(myIntegerVar*myIntegerVar);

// Program Flow

if(myUndefinedVar) {
    //var is OK

} else {
    // var is undefined
    throw new Erroe ('');
}


const num =123;

if(num < 10){
    // false -->skip this

} else if (num < 100) {
    // false --> skip this

} else {
    // true --> eksekute this
}

// Ternary Operator 
const studentAge = 15;
const price  = studentAge > 18 ? "20$" : "15$";
let myIntegerVar = 10;
let myStringVar = "10";
let myBooleanVar = true;
let myNullVar = null;
let myUndefinedVar = undefined;
// console.log(myIntegerVar*myIntegerVar);

// Program Flow

// if(myUndefinedVar) {
//     //var is OK

// } else {
//     // var is undefined
//     throw new Error ('');
// }


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



//////////////////////////
//      OBJECTS        //
/////////////////////////

const user = {
    name: 'James',
    surname: 'Bond',
    age: 50,
    isActor: true,
    address: {
        street: "Bond street",
        number: 007,
        country: 'Albania',
    },
    phoneNumbers: ['069888999888', "0068666555999"],
}

const user2 = {
    name: 'Alina',
    surname: 'Spahiu',
    age: 26,
    isActor: true,
    address: {
        street: "Lapraka street",
        number: 9,
        country: 'Albania',
    },
    phoneNumbers: ['069888999888', "0068666555999"],
}

user.surname = "BondBondBond" // overWriting the surname
console.log("the street: ", user.address.street);
console.log("Phone numbers: ", user.phoneNumbers);
console.log("New Surname: ", user.surname);

delete user.address;

console.log(Object.keys(user))// reciving back an array of string with the propertys of object.
console.log(user['name']);//another way how to get the name.
console.log(user['phoneNumbers'].length);

// ARRAYS

console.log(Object.keys(user).length);

const userList =[user, user2];
console.log("First user Lists elements name: ", userList[0]);
console.log("Second user Lists elements name: ", userList[1]);
console.log("Third user Lists elements name: ", userList[2]); // del: undefined

// Nese kerkojme vetem name te secila list:
console.log("First user Lists elements name: ", userList[0].name);
console.log("Second user Lists elements name: ", userList[1].name);

if(userList[2] !==undefined) {
console.log("Third user Lists elements name: ", userList[2].name); //del error. dhe e nderpret kodin.
}

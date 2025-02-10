// primitive data types
// 7
// String ,number, Boolean, null, undefined, Symbol
// BigInt

// Reference (Non primitive)
// Array , Objects, Function

// dynamically typed 

// let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid)
const bigNumber = 34567890123n;

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Aditi")
}

console.log(typeof bigNumber);

Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) , heap(Non-primitive)


let myName  = "TanujBhandari"
let anothername = "chaiorcode"
anothername = "aditimishra"
let user ={
    email : "user@google.com"
    upi: "user@apl"

}

let userTwo = user;



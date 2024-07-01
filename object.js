// object in javascript

// singleton

// object create 

// object literals

const sym =Symbol("key1")

const userObject ={
    name:"mohsin",
    age:23,
    email:"mohsin@gmail.com",
    city:"hasilpur",
    "full name":"mohsin riaz",
    ["sym"]:"mykey"
}
// console.log(userObject.age,userObject.city)

// console.log(userObject["full name"]);

// console.log(userObject["sym"]);

userObject.name="riaz"

Object.freeze(userObject)

userObject.name="mohisn"

console.log(userObject)






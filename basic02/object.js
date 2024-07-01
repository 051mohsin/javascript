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

// console.log(userObject)

// nasted object 

const obj1 = { 

   user:[
        {
            user:"mohsin",
            email:"mohsin1@gamil.com"
        },
        {
            user : "ali0",
            email :"ali0@gamil.com"
        },
        {
            user : "ali1",
            email :"ali1@gamil.com"
        },
        {
            user : "ali2",
            email :"ali2@gamil.com"
        }
    ]
}

// console.log(obj1.user[2]);

// combine object 

const obj2 = {1:"a", 2 : "b" , 3:"c"}

const obj3 = {4 : "a", 5 : "b" , 6:"c"}

const obj4 =Object.assign(obj2,obj3)

const obj5 = {...obj2,...obj3}

// console.log(`object combine by sperad method `, {obj5});

console.log('object combine by sperad method', obj5);




